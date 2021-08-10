#![deny(clippy::pedantic)]
#![feature(cfg_version)]
#![feature(box_patterns)]
#![feature(proc_macro_tracked_env)]
// Note: Stabilised in 1.54.0, but nightly is two versions ahead
#![cfg_attr(not(version("1.56.0")), feature(bindings_after_at))]

extern crate proc_macro;

#[macro_use]
extern crate proc_macro_error;

use proc_macro::TokenStream;

mod generics;
mod kernel;
mod lend_to_cuda;
mod rust_to_cuda;

// cargo expand --target x86_64-unknown-linux-gnu --ugly \
//  | rustfmt --config max_width=160 > out.rs
// cargo expand --target nvptx64-nvidia-cuda --ugly \
//  | rustfmt --config max_width=160 > out.rs

#[proc_macro_error]
#[proc_macro_derive(RustToCudaAsRust, attributes(r2cEmbed, r2cBound, r2cEval, r2cPhantom))]
pub fn rust_to_cuda_derive(input: TokenStream) -> TokenStream {
    let ast = match syn::parse(input) {
        Ok(ast) => ast,
        Err(err) => abort!(err),
    };

    // Build the implementation of the `RustToCuda` and `CudaAsRust` traits
    rust_to_cuda::impl_rust_to_cuda(&ast)
}

#[proc_macro_error]
#[proc_macro_derive(LendRustBorrowToCuda)]
pub fn lend_to_cuda_derive(input: TokenStream) -> TokenStream {
    let ast = match syn::parse(input) {
        Ok(ast) => ast,
        Err(err) => abort!(err),
    };

    // Build the implementation of the `LendToCuda` and `BorrowFromRust` traits
    lend_to_cuda::impl_lend_to_cuda(&ast)
}

#[proc_macro_error]
#[proc_macro_attribute]
pub fn kernel(attr: TokenStream, func: TokenStream) -> TokenStream {
    kernel::wrapper::kernel(attr, func)
}

#[proc_macro_error]
#[proc_macro]
pub fn specialise_kernel_type(tokens: TokenStream) -> TokenStream {
    kernel::specialise::ty::specialise_kernel_type(tokens)
}

#[proc_macro_error]
#[proc_macro]
pub fn specialise_kernel_call(tokens: TokenStream) -> TokenStream {
    kernel::specialise::call::specialise_kernel_call(tokens)
}

#[proc_macro_error]
#[proc_macro_attribute]
pub fn specialise_kernel_entry(attr: TokenStream, func: TokenStream) -> TokenStream {
    kernel::specialise::entry::specialise_kernel_entry(attr, func)
}

#[proc_macro_error]
#[proc_macro]
pub fn link_kernel(tokens: TokenStream) -> TokenStream {
    kernel::link::link_kernel(tokens)
}