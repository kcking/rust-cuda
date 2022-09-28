(function() {var implementors = {
"rust_cuda":[["impl&lt;T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://docs.rs/rustacuda_core/0.1.2/rustacuda_core/memory/trait.DeviceCopy.html\" title=\"trait rustacuda_core::memory::DeviceCopy\">DeviceCopy</a>&gt; <a class=\"trait\" href=\"https://momolangenstein.github.io/const-type-layout/const_type_layout/trait.TypeLayout.html\" title=\"trait const_type_layout::TypeLayout\">TypeLayout</a> for <a class=\"struct\" href=\"rust_cuda/common/struct.DeviceAccessible.html\" title=\"struct rust_cuda::common::DeviceAccessible\">DeviceAccessible</a>&lt;T&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://momolangenstein.github.io/const-type-layout/const_type_layout/trait.TypeLayout.html\" title=\"trait const_type_layout::TypeLayout\">TypeLayout</a>,</span>"],["impl&lt;'r, T:&nbsp;<a class=\"trait\" href=\"https://docs.rs/rustacuda_core/0.1.2/rustacuda_core/memory/trait.DeviceCopy.html\" title=\"trait rustacuda_core::memory::DeviceCopy\">DeviceCopy</a> + 'r&gt; <a class=\"trait\" href=\"https://momolangenstein.github.io/const-type-layout/const_type_layout/trait.TypeLayout.html\" title=\"trait const_type_layout::TypeLayout\">TypeLayout</a> for <a class=\"struct\" href=\"rust_cuda/common/struct.DeviceConstRef.html\" title=\"struct rust_cuda::common::DeviceConstRef\">DeviceConstRef</a>&lt;'r, T&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*const T</a>: <a class=\"trait\" href=\"https://momolangenstein.github.io/const-type-layout/const_type_layout/trait.TypeLayout.html\" title=\"trait const_type_layout::TypeLayout\">TypeLayout</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'r </a>T&gt;: <a class=\"trait\" href=\"https://momolangenstein.github.io/const-type-layout/const_type_layout/trait.TypeLayout.html\" title=\"trait const_type_layout::TypeLayout\">TypeLayout</a>,</span>"],["impl&lt;'r, T:&nbsp;<a class=\"trait\" href=\"https://docs.rs/rustacuda_core/0.1.2/rustacuda_core/memory/trait.DeviceCopy.html\" title=\"trait rustacuda_core::memory::DeviceCopy\">DeviceCopy</a> + 'r&gt; <a class=\"trait\" href=\"https://momolangenstein.github.io/const-type-layout/const_type_layout/trait.TypeLayout.html\" title=\"trait const_type_layout::TypeLayout\">TypeLayout</a> for <a class=\"struct\" href=\"rust_cuda/common/struct.DeviceMutRef.html\" title=\"struct rust_cuda::common::DeviceMutRef\">DeviceMutRef</a>&lt;'r, T&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.pointer.html\">*mut T</a>: <a class=\"trait\" href=\"https://momolangenstein.github.io/const-type-layout/const_type_layout/trait.TypeLayout.html\" title=\"trait const_type_layout::TypeLayout\">TypeLayout</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/marker/struct.PhantomData.html\" title=\"struct core::marker::PhantomData\">PhantomData</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;'r mut </a>T&gt;: <a class=\"trait\" href=\"https://momolangenstein.github.io/const-type-layout/const_type_layout/trait.TypeLayout.html\" title=\"trait const_type_layout::TypeLayout\">TypeLayout</a>,</span>"],["impl&lt;T, const STRIDE:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://momolangenstein.github.io/const-type-layout/const_type_layout/trait.TypeLayout.html\" title=\"trait const_type_layout::TypeLayout\">TypeLayout</a> for <a class=\"struct\" href=\"rust_cuda/utils/aliasing/struct.SplitSliceOverCudaThreadsConstStride.html\" title=\"struct rust_cuda::utils::aliasing::SplitSliceOverCudaThreadsConstStride\">SplitSliceOverCudaThreadsConstStride</a>&lt;T, STRIDE&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://momolangenstein.github.io/const-type-layout/const_type_layout/trait.TypeLayout.html\" title=\"trait const_type_layout::TypeLayout\">TypeLayout</a>,</span>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://momolangenstein.github.io/const-type-layout/const_type_layout/trait.TypeLayout.html\" title=\"trait const_type_layout::TypeLayout\">TypeLayout</a> for <a class=\"struct\" href=\"rust_cuda/utils/aliasing/struct.SplitSliceOverCudaThreadsDynamicStride.html\" title=\"struct rust_cuda::utils::aliasing::SplitSliceOverCudaThreadsDynamicStride\">SplitSliceOverCudaThreadsDynamicStride</a>&lt;T&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>: <a class=\"trait\" href=\"https://momolangenstein.github.io/const-type-layout/const_type_layout/trait.TypeLayout.html\" title=\"trait const_type_layout::TypeLayout\">TypeLayout</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://momolangenstein.github.io/const-type-layout/const_type_layout/trait.TypeLayout.html\" title=\"trait const_type_layout::TypeLayout\">TypeLayout</a>,</span>"],["impl&lt;T:&nbsp;<a class=\"trait\" href=\"rust_cuda/safety/trait.SafeDeviceCopy.html\" title=\"trait rust_cuda::safety::SafeDeviceCopy\">SafeDeviceCopy</a> + <a class=\"trait\" href=\"https://momolangenstein.github.io/const-type-layout/const_type_layout/trait.TypeLayout.html\" title=\"trait const_type_layout::TypeLayout\">TypeLayout</a>&gt; <a class=\"trait\" href=\"https://momolangenstein.github.io/const-type-layout/const_type_layout/trait.TypeLayout.html\" title=\"trait const_type_layout::TypeLayout\">TypeLayout</a> for <a class=\"struct\" href=\"rust_cuda/utils/device_copy/struct.SafeDeviceCopyWrapper.html\" title=\"struct rust_cuda::utils::device_copy::SafeDeviceCopyWrapper\">SafeDeviceCopyWrapper</a>&lt;T&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://momolangenstein.github.io/const-type-layout/const_type_layout/trait.TypeLayout.html\" title=\"trait const_type_layout::TypeLayout\">TypeLayout</a>,</span>"],["impl&lt;T:&nbsp;<a class=\"trait\" href=\"rust_cuda/safety/trait.SafeDeviceCopy.html\" title=\"trait rust_cuda::safety::SafeDeviceCopy\">SafeDeviceCopy</a>, const M2D:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>, const M2H:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt; <a class=\"trait\" href=\"https://momolangenstein.github.io/const-type-layout/const_type_layout/trait.TypeLayout.html\" title=\"trait const_type_layout::TypeLayout\">TypeLayout</a> for <a class=\"struct\" href=\"rust_cuda/utils/exchange/buffer/struct.CudaExchangeItem.html\" title=\"struct rust_cuda::utils::exchange::buffer::CudaExchangeItem\">CudaExchangeItem</a>&lt;T, M2D, M2H&gt;<span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://momolangenstein.github.io/const-type-layout/const_type_layout/trait.TypeLayout.html\" title=\"trait const_type_layout::TypeLayout\">TypeLayout</a>,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()