(function() {var implementors = {
"rust_cuda":[["impl&lt;'stream&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"rust_cuda/host/struct.Stream.html\" title=\"struct rust_cuda::host::Stream\">Stream</a>&lt;'stream&gt;"],["impl&lt;C: <a class=\"trait\" href=\"rust_cuda/host/trait.CudaDroppable.html\" title=\"trait rust_cuda::host::CudaDroppable\">CudaDroppable</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"rust_cuda/host/struct.CudaDropWrapper.html\" title=\"struct rust_cuda::host::CudaDropWrapper\">CudaDropWrapper</a>&lt;C&gt;"],["impl&lt;E, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a>&lt;Target = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[E]</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"rust_cuda/utils/aliasing/struct.SplitSliceOverCudaThreadsDynamicStride.html\" title=\"struct rust_cuda::utils::aliasing::SplitSliceOverCudaThreadsDynamicStride\">SplitSliceOverCudaThreadsDynamicStride</a>&lt;T&gt;"],["impl&lt;E, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a>&lt;Target = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[E]</a>&gt;, const STRIDE: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"rust_cuda/utils/aliasing/struct.SplitSliceOverCudaThreadsConstStride.html\" title=\"struct rust_cuda::utils::aliasing::SplitSliceOverCudaThreadsConstStride\">SplitSliceOverCudaThreadsConstStride</a>&lt;T, STRIDE&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"rust_cuda/kernel/param/struct.PtxJit.html\" title=\"struct rust_cuda::kernel::param::PtxJit\">PtxJit</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"rust_cuda/safety/trait.PortableBitSemantics.html\" title=\"trait rust_cuda::safety::PortableBitSemantics\">PortableBitSemantics</a> + <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/trait.TypeGraphLayout.html\" title=\"trait const_type_layout::TypeGraphLayout\">TypeGraphLayout</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"rust_cuda/utils/adapter/struct.RustToCudaWithPortableBitCloneSemantics.html\" title=\"struct rust_cuda::utils::adapter::RustToCudaWithPortableBitCloneSemantics\">RustToCudaWithPortableBitCloneSemantics</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"rust_cuda/safety/trait.PortableBitSemantics.html\" title=\"trait rust_cuda::safety::PortableBitSemantics\">PortableBitSemantics</a> + <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/trait.TypeGraphLayout.html\" title=\"trait const_type_layout::TypeGraphLayout\">TypeGraphLayout</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"rust_cuda/utils/adapter/struct.RustToCudaWithPortableBitCopySemantics.html\" title=\"struct rust_cuda::utils::adapter::RustToCudaWithPortableBitCopySemantics\">RustToCudaWithPortableBitCopySemantics</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + <a class=\"trait\" href=\"rust_cuda/safety/trait.StackOnly.html\" title=\"trait rust_cuda::safety::StackOnly\">StackOnly</a> + <a class=\"trait\" href=\"rust_cuda/safety/trait.PortableBitSemantics.html\" title=\"trait rust_cuda::safety::PortableBitSemantics\">PortableBitSemantics</a> + <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/trait.TypeGraphLayout.html\" title=\"trait const_type_layout::TypeGraphLayout\">TypeGraphLayout</a> + <a class=\"trait\" href=\"rust_cuda/kernel/param/trait.InteriorMutableSync.html\" title=\"trait rust_cuda::kernel::param::InteriorMutableSync\">InteriorMutableSync</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"rust_cuda/kernel/param/struct.ShallowInteriorMutable.html\" title=\"struct rust_cuda::kernel::param::ShallowInteriorMutable\">ShallowInteriorMutable</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"rust_cuda/lend/trait.RustToCuda.html\" title=\"trait rust_cuda::lend::RustToCuda\">RustToCuda</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"rust_cuda/kernel/param/struct.DeepPerThreadBorrow.html\" title=\"struct rust_cuda::kernel::param::DeepPerThreadBorrow\">DeepPerThreadBorrow</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"rust_cuda/lend/trait.RustToCuda.html\" title=\"trait rust_cuda::lend::RustToCuda\">RustToCuda</a>&lt;CudaAllocation: <a class=\"trait\" href=\"rust_cuda/alloc/trait.EmptyCudaAlloc.html\" title=\"trait rust_cuda::alloc::EmptyCudaAlloc\">EmptyCudaAlloc</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"rust_cuda/utils/exchange/wrapper/struct.ExchangeWrapperOnHost.html\" title=\"struct rust_cuda::utils::exchange::wrapper::ExchangeWrapperOnHost\">ExchangeWrapperOnHost</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"rust_cuda/safety/trait.PortableBitSemantics.html\" title=\"trait rust_cuda::safety::PortableBitSemantics\">PortableBitSemantics</a> + <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/trait.TypeGraphLayout.html\" title=\"trait const_type_layout::TypeGraphLayout\">TypeGraphLayout</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"rust_cuda/utils/adapter/struct.DeviceCopyWithPortableBitSemantics.html\" title=\"struct rust_cuda::utils::adapter::DeviceCopyWithPortableBitSemantics\">DeviceCopyWithPortableBitSemantics</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"rust_cuda/safety/trait.PortableBitSemantics.html\" title=\"trait rust_cuda::safety::PortableBitSemantics\">PortableBitSemantics</a> + <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/trait.TypeGraphLayout.html\" title=\"trait const_type_layout::TypeGraphLayout\">TypeGraphLayout</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"rust_cuda/utils/ffi/struct.DeviceAccessible.html\" title=\"struct rust_cuda::utils::ffi::DeviceAccessible\">DeviceAccessible</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"rust_cuda/safety/trait.StackOnly.html\" title=\"trait rust_cuda::safety::StackOnly\">StackOnly</a> + <a class=\"trait\" href=\"rust_cuda/safety/trait.PortableBitSemantics.html\" title=\"trait rust_cuda::safety::PortableBitSemantics\">PortableBitSemantics</a> + <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/trait.TypeGraphLayout.html\" title=\"trait const_type_layout::TypeGraphLayout\">TypeGraphLayout</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"rust_cuda/kernel/param/struct.PerThreadShallowCopy.html\" title=\"struct rust_cuda::kernel::param::PerThreadShallowCopy\">PerThreadShallowCopy</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"rust_cuda/safety/trait.StackOnly.html\" title=\"trait rust_cuda::safety::StackOnly\">StackOnly</a> + <a class=\"trait\" href=\"rust_cuda/safety/trait.PortableBitSemantics.html\" title=\"trait rust_cuda::safety::PortableBitSemantics\">PortableBitSemantics</a> + <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.1/const_type_layout/trait.TypeGraphLayout.html\" title=\"trait const_type_layout::TypeGraphLayout\">TypeGraphLayout</a>, const M2D: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>, const M2H: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"rust_cuda/utils/exchange/buffer/struct.CudaExchangeBuffer.html\" title=\"struct rust_cuda::utils::exchange::buffer::CudaExchangeBuffer\">CudaExchangeBuffer</a>&lt;T, M2D, M2H&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()