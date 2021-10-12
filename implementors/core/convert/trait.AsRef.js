(function() {var implementors = {};
implementors["rust_cuda"] = [{"text":"impl&lt;'r, T:&nbsp;<a class=\"trait\" href=\"https://docs.rs/rustacuda_core/0.1.2/rustacuda_core/memory/trait.DeviceCopy.html\" title=\"trait rustacuda_core::memory::DeviceCopy\">DeviceCopy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T&gt; for <a class=\"struct\" href=\"rust_cuda/common/struct.DeviceConstRef.html\" title=\"struct rust_cuda::common::DeviceConstRef\">DeviceConstRef</a>&lt;'r, T&gt;","synthetic":false,"types":["rust_cuda::common::DeviceConstRef"]},{"text":"impl&lt;'r, T:&nbsp;<a class=\"trait\" href=\"https://docs.rs/rustacuda_core/0.1.2/rustacuda_core/memory/trait.DeviceCopy.html\" title=\"trait rustacuda_core::memory::DeviceCopy\">DeviceCopy</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T&gt; for <a class=\"struct\" href=\"rust_cuda/common/struct.DeviceMutRef.html\" title=\"struct rust_cuda::common::DeviceMutRef\">DeviceMutRef</a>&lt;'r, T&gt;","synthetic":false,"types":["rust_cuda::common::DeviceMutRef"]},{"text":"impl&lt;E, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a>E<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt;, const STRIDE:&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a>E<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"rust_cuda/utils/aliasing/struct.SplitSliceOverCudaThreadsConstStride.html\" title=\"struct rust_cuda::utils::aliasing::SplitSliceOverCudaThreadsConstStride\">SplitSliceOverCudaThreadsConstStride</a>&lt;T, STRIDE&gt;","synthetic":false,"types":["rust_cuda::utils::aliasing::const::SplitSliceOverCudaThreadsConstStride"]},{"text":"impl&lt;E, T:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a>E<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">[</a>E<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"rust_cuda/utils/aliasing/struct.SplitSliceOverCudaThreadsDynamicStride.html\" title=\"struct rust_cuda::utils::aliasing::SplitSliceOverCudaThreadsDynamicStride\">SplitSliceOverCudaThreadsDynamicStride</a>&lt;T&gt;","synthetic":false,"types":["rust_cuda::utils::aliasing::dynamic::SplitSliceOverCudaThreadsDynamicStride"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()