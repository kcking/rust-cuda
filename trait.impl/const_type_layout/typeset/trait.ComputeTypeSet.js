(function() {var implementors = {
"rust_cuda":[["impl&lt;'r, T&gt; <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/typeset/trait.ComputeTypeSet.html\" title=\"trait const_type_layout::typeset::ComputeTypeSet\">ComputeTypeSet</a> for <a class=\"struct\" href=\"rust_cuda/utils/ffi/struct.DeviceConstRef.html\" title=\"struct rust_cuda::utils::ffi::DeviceConstRef\">DeviceConstRef</a>&lt;'r, T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/typeset/trait.ComputeTypeSet.html\" title=\"trait const_type_layout::typeset::ComputeTypeSet\">ComputeTypeSet</a> + <a class=\"trait\" href=\"rust_cuda/safety/trait.PortableBitSemantics.html\" title=\"trait rust_cuda::safety::PortableBitSemantics\">PortableBitSemantics</a> + 'r,</div>"],["impl&lt;'r, T&gt; <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/typeset/trait.ComputeTypeSet.html\" title=\"trait const_type_layout::typeset::ComputeTypeSet\">ComputeTypeSet</a> for <a class=\"struct\" href=\"rust_cuda/utils/ffi/struct.DeviceMutRef.html\" title=\"struct rust_cuda::utils::ffi::DeviceMutRef\">DeviceMutRef</a>&lt;'r, T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/typeset/trait.ComputeTypeSet.html\" title=\"trait const_type_layout::typeset::ComputeTypeSet\">ComputeTypeSet</a> + <a class=\"trait\" href=\"rust_cuda/safety/trait.PortableBitSemantics.html\" title=\"trait rust_cuda::safety::PortableBitSemantics\">PortableBitSemantics</a> + 'r,</div>"],["impl&lt;'r, T&gt; <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/typeset/trait.ComputeTypeSet.html\" title=\"trait const_type_layout::typeset::ComputeTypeSet\">ComputeTypeSet</a> for <a class=\"struct\" href=\"rust_cuda/utils/ffi/struct.DeviceOwnedRef.html\" title=\"struct rust_cuda::utils::ffi::DeviceOwnedRef\">DeviceOwnedRef</a>&lt;'r, T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/typeset/trait.ComputeTypeSet.html\" title=\"trait const_type_layout::typeset::ComputeTypeSet\">ComputeTypeSet</a> + <a class=\"trait\" href=\"rust_cuda/safety/trait.PortableBitSemantics.html\" title=\"trait rust_cuda::safety::PortableBitSemantics\">PortableBitSemantics</a>,</div>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/typeset/trait.ComputeTypeSet.html\" title=\"trait const_type_layout::typeset::ComputeTypeSet\">ComputeTypeSet</a> for <a class=\"struct\" href=\"rust_cuda/utils/adapter/struct.DeviceCopyWithPortableBitSemantics.html\" title=\"struct rust_cuda::utils::adapter::DeviceCopyWithPortableBitSemantics\">DeviceCopyWithPortableBitSemantics</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/typeset/trait.ComputeTypeSet.html\" title=\"trait const_type_layout::typeset::ComputeTypeSet\">ComputeTypeSet</a> + <a class=\"trait\" href=\"rust_cuda/safety/trait.PortableBitSemantics.html\" title=\"trait rust_cuda::safety::PortableBitSemantics\">PortableBitSemantics</a> + <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/trait.TypeGraphLayout.html\" title=\"trait const_type_layout::TypeGraphLayout\">TypeGraphLayout</a>,</div>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/typeset/trait.ComputeTypeSet.html\" title=\"trait const_type_layout::typeset::ComputeTypeSet\">ComputeTypeSet</a> for <a class=\"struct\" href=\"rust_cuda/utils/adapter/struct.RustToCudaWithPortableBitCloneSemantics.html\" title=\"struct rust_cuda::utils::adapter::RustToCudaWithPortableBitCloneSemantics\">RustToCudaWithPortableBitCloneSemantics</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/typeset/trait.ComputeTypeSet.html\" title=\"trait const_type_layout::typeset::ComputeTypeSet\">ComputeTypeSet</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"rust_cuda/safety/trait.PortableBitSemantics.html\" title=\"trait rust_cuda::safety::PortableBitSemantics\">PortableBitSemantics</a> + <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/trait.TypeGraphLayout.html\" title=\"trait const_type_layout::TypeGraphLayout\">TypeGraphLayout</a>,</div>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/typeset/trait.ComputeTypeSet.html\" title=\"trait const_type_layout::typeset::ComputeTypeSet\">ComputeTypeSet</a> for <a class=\"struct\" href=\"rust_cuda/utils/adapter/struct.RustToCudaWithPortableBitCopySemantics.html\" title=\"struct rust_cuda::utils::adapter::RustToCudaWithPortableBitCopySemantics\">RustToCudaWithPortableBitCopySemantics</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/typeset/trait.ComputeTypeSet.html\" title=\"trait const_type_layout::typeset::ComputeTypeSet\">ComputeTypeSet</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"rust_cuda/safety/trait.PortableBitSemantics.html\" title=\"trait rust_cuda::safety::PortableBitSemantics\">PortableBitSemantics</a> + <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/trait.TypeGraphLayout.html\" title=\"trait const_type_layout::TypeGraphLayout\">TypeGraphLayout</a>,</div>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/typeset/trait.ComputeTypeSet.html\" title=\"trait const_type_layout::typeset::ComputeTypeSet\">ComputeTypeSet</a> for <a class=\"struct\" href=\"rust_cuda/utils/aliasing/struct.SplitSliceOverCudaThreadsDynamicStride.html\" title=\"struct rust_cuda::utils::aliasing::SplitSliceOverCudaThreadsDynamicStride\">SplitSliceOverCudaThreadsDynamicStride</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/typeset/trait.ComputeTypeSet.html\" title=\"trait const_type_layout::typeset::ComputeTypeSet\">ComputeTypeSet</a>,</div>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/typeset/trait.ComputeTypeSet.html\" title=\"trait const_type_layout::typeset::ComputeTypeSet\">ComputeTypeSet</a> for <a class=\"struct\" href=\"rust_cuda/utils/ffi/struct.DeviceAccessible.html\" title=\"struct rust_cuda::utils::ffi::DeviceAccessible\">DeviceAccessible</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/typeset/trait.ComputeTypeSet.html\" title=\"trait const_type_layout::typeset::ComputeTypeSet\">ComputeTypeSet</a> + <a class=\"trait\" href=\"rust_cuda/safety/trait.PortableBitSemantics.html\" title=\"trait rust_cuda::safety::PortableBitSemantics\">PortableBitSemantics</a> + <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/trait.TypeGraphLayout.html\" title=\"trait const_type_layout::TypeGraphLayout\">TypeGraphLayout</a>,</div>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/typeset/trait.ComputeTypeSet.html\" title=\"trait const_type_layout::typeset::ComputeTypeSet\">ComputeTypeSet</a> for <a class=\"struct\" href=\"rust_cuda/utils/ffi/struct.DeviceConstPointer.html\" title=\"struct rust_cuda::utils::ffi::DeviceConstPointer\">DeviceConstPointer</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/typeset/trait.ComputeTypeSet.html\" title=\"trait const_type_layout::typeset::ComputeTypeSet\">ComputeTypeSet</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/typeset/trait.ComputeTypeSet.html\" title=\"trait const_type_layout::typeset::ComputeTypeSet\">ComputeTypeSet</a> for <a class=\"struct\" href=\"rust_cuda/utils/ffi/struct.DeviceMutPointer.html\" title=\"struct rust_cuda::utils::ffi::DeviceMutPointer\">DeviceMutPointer</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/typeset/trait.ComputeTypeSet.html\" title=\"trait const_type_layout::typeset::ComputeTypeSet\">ComputeTypeSet</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/typeset/trait.ComputeTypeSet.html\" title=\"trait const_type_layout::typeset::ComputeTypeSet\">ComputeTypeSet</a> for <a class=\"struct\" href=\"rust_cuda/utils/ffi/struct.DeviceOwnedPointer.html\" title=\"struct rust_cuda::utils::ffi::DeviceOwnedPointer\">DeviceOwnedPointer</a>&lt;T&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/typeset/trait.ComputeTypeSet.html\" title=\"trait const_type_layout::typeset::ComputeTypeSet\">ComputeTypeSet</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div>"],["impl&lt;T, const M2D: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>, const M2H: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt; <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/typeset/trait.ComputeTypeSet.html\" title=\"trait const_type_layout::typeset::ComputeTypeSet\">ComputeTypeSet</a> for <a class=\"struct\" href=\"rust_cuda/utils/exchange/buffer/struct.CudaExchangeItem.html\" title=\"struct rust_cuda::utils::exchange::buffer::CudaExchangeItem\">CudaExchangeItem</a>&lt;T, M2D, M2H&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/typeset/trait.ComputeTypeSet.html\" title=\"trait const_type_layout::typeset::ComputeTypeSet\">ComputeTypeSet</a> + <a class=\"trait\" href=\"rust_cuda/safety/trait.StackOnly.html\" title=\"trait rust_cuda::safety::StackOnly\">StackOnly</a> + <a class=\"trait\" href=\"rust_cuda/safety/trait.PortableBitSemantics.html\" title=\"trait rust_cuda::safety::PortableBitSemantics\">PortableBitSemantics</a> + <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/trait.TypeGraphLayout.html\" title=\"trait const_type_layout::TypeGraphLayout\">TypeGraphLayout</a>,</div>"],["impl&lt;T, const STRIDE: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/typeset/trait.ComputeTypeSet.html\" title=\"trait const_type_layout::typeset::ComputeTypeSet\">ComputeTypeSet</a> for <a class=\"struct\" href=\"rust_cuda/utils/aliasing/struct.SplitSliceOverCudaThreadsConstStride.html\" title=\"struct rust_cuda::utils::aliasing::SplitSliceOverCudaThreadsConstStride\">SplitSliceOverCudaThreadsConstStride</a>&lt;T, STRIDE&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/typeset/trait.ComputeTypeSet.html\" title=\"trait const_type_layout::typeset::ComputeTypeSet\">ComputeTypeSet</a>,</div>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()