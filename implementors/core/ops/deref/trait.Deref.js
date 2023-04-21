(function() {var implementors = {
"rust_cuda":[["impl&lt;T: <a class=\"trait\" href=\"rust_cuda/common/trait.RustToCuda.html\" title=\"trait rust_cuda::common::RustToCuda\">RustToCuda</a>&lt;CudaAllocation: <a class=\"trait\" href=\"rust_cuda/host/trait.EmptyCudaAlloc.html\" title=\"trait rust_cuda::host::EmptyCudaAlloc\">EmptyCudaAlloc</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"rust_cuda/utils/exchange/wrapper/struct.ExchangeWrapperOnHost.html\" title=\"struct rust_cuda::utils::exchange::wrapper::ExchangeWrapperOnHost\">ExchangeWrapperOnHost</a>&lt;T&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"rust_cuda/device/struct.ShallowCopy.html\" title=\"struct rust_cuda::device::ShallowCopy\">ShallowCopy</a>&lt;T&gt;"],["impl&lt;E, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a>&lt;Target = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[E]</a>&gt;, const STRIDE: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"rust_cuda/utils/aliasing/struct.SplitSliceOverCudaThreadsConstStride.html\" title=\"struct rust_cuda::utils::aliasing::SplitSliceOverCudaThreadsConstStride\">SplitSliceOverCudaThreadsConstStride</a>&lt;T, STRIDE&gt;"],["impl&lt;E, T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a>&lt;Target = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[E]</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"rust_cuda/utils/aliasing/struct.SplitSliceOverCudaThreadsDynamicStride.html\" title=\"struct rust_cuda::utils::aliasing::SplitSliceOverCudaThreadsDynamicStride\">SplitSliceOverCudaThreadsDynamicStride</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"rust_cuda/safety/trait.SafeDeviceCopy.html\" title=\"trait rust_cuda::safety::SafeDeviceCopy\">SafeDeviceCopy</a>, const M2D: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>, const M2H: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"rust_cuda/utils/exchange/buffer/struct.CudaExchangeBufferDevice.html\" title=\"struct rust_cuda::utils::exchange::buffer::CudaExchangeBufferDevice\">CudaExchangeBufferDevice</a>&lt;T, M2D, M2H&gt;"],["impl&lt;T: <a class=\"trait\" href=\"rust_cuda/safety/trait.SafeDeviceCopy.html\" title=\"trait rust_cuda::safety::SafeDeviceCopy\">SafeDeviceCopy</a> + <a class=\"trait\" href=\"https://juntyr.github.io/const-type-layout/const_type_layout/trait.TypeGraphLayout.html\" title=\"trait const_type_layout::TypeGraphLayout\">TypeGraphLayout</a>, const M2D: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>, const M2H: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"rust_cuda/utils/exchange/buffer/struct.CudaExchangeBuffer.html\" title=\"struct rust_cuda::utils::exchange::buffer::CudaExchangeBuffer\">CudaExchangeBufferHost</a>&lt;T, M2D, M2H&gt;"],["impl&lt;C: Sealed&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"rust_cuda/host/struct.CudaDropWrapper.html\" title=\"struct rust_cuda::host::CudaDropWrapper\">CudaDropWrapper</a>&lt;C&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()