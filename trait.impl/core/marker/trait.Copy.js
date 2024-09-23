(function() {var implementors = {
"rust_cuda":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"rust_cuda/device/thread/struct.Dim3.html\" title=\"struct rust_cuda::device::thread::Dim3\">Dim3</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"rust_cuda/device/thread/struct.Idx3.html\" title=\"struct rust_cuda::device::thread::Idx3\">Idx3</a>"],["impl&lt;'a, T: <a class=\"trait\" href=\"rust_cuda/safety/trait.PortableBitSemantics.html\" title=\"trait rust_cuda::safety::PortableBitSemantics\">PortableBitSemantics</a> + <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.2/const_type_layout/trait.TypeGraphLayout.html\" title=\"trait const_type_layout::TypeGraphLayout\">TypeGraphLayout</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"rust_cuda/host/struct.HostAndDeviceConstRef.html\" title=\"struct rust_cuda::host::HostAndDeviceConstRef\">HostAndDeviceConstRef</a>&lt;'a, T&gt;"],["impl&lt;'r, T: <a class=\"trait\" href=\"rust_cuda/safety/trait.PortableBitSemantics.html\" title=\"trait rust_cuda::safety::PortableBitSemantics\">PortableBitSemantics</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"rust_cuda/utils/ffi/struct.DeviceConstRef.html\" title=\"struct rust_cuda::utils::ffi::DeviceConstRef\">DeviceConstRef</a>&lt;'r, T&gt;"],["impl&lt;'stream&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"rust_cuda/host/struct.Stream.html\" title=\"struct rust_cuda::host::Stream\">Stream</a>&lt;'stream&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"rust_cuda/safety/trait.PortableBitSemantics.html\" title=\"trait rust_cuda::safety::PortableBitSemantics\">PortableBitSemantics</a> + <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.2/const_type_layout/trait.TypeGraphLayout.html\" title=\"trait const_type_layout::TypeGraphLayout\">TypeGraphLayout</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"rust_cuda/utils/adapter/struct.RustToCudaWithPortableBitCloneSemantics.html\" title=\"struct rust_cuda::utils::adapter::RustToCudaWithPortableBitCloneSemantics\">RustToCudaWithPortableBitCloneSemantics</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"rust_cuda/safety/trait.PortableBitSemantics.html\" title=\"trait rust_cuda::safety::PortableBitSemantics\">PortableBitSemantics</a> + <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.2/const_type_layout/trait.TypeGraphLayout.html\" title=\"trait const_type_layout::TypeGraphLayout\">TypeGraphLayout</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"rust_cuda/utils/adapter/struct.RustToCudaWithPortableBitCopySemantics.html\" title=\"struct rust_cuda::utils::adapter::RustToCudaWithPortableBitCopySemantics\">RustToCudaWithPortableBitCopySemantics</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"rust_cuda/safety/trait.PortableBitSemantics.html\" title=\"trait rust_cuda::safety::PortableBitSemantics\">PortableBitSemantics</a> + <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.2/const_type_layout/trait.TypeGraphLayout.html\" title=\"trait const_type_layout::TypeGraphLayout\">TypeGraphLayout</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"rust_cuda/utils/adapter/struct.DeviceCopyWithPortableBitSemantics.html\" title=\"struct rust_cuda::utils::adapter::DeviceCopyWithPortableBitSemantics\">DeviceCopyWithPortableBitSemantics</a>&lt;T&gt;"],["impl&lt;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> + <a class=\"trait\" href=\"rust_cuda/safety/trait.StackOnly.html\" title=\"trait rust_cuda::safety::StackOnly\">StackOnly</a> + <a class=\"trait\" href=\"rust_cuda/safety/trait.PortableBitSemantics.html\" title=\"trait rust_cuda::safety::PortableBitSemantics\">PortableBitSemantics</a> + <a class=\"trait\" href=\"https://docs.rs/const-type-layout/0.3.2/const_type_layout/trait.TypeGraphLayout.html\" title=\"trait const_type_layout::TypeGraphLayout\">TypeGraphLayout</a>, const M2D: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>, const M2H: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"rust_cuda/utils/exchange/buffer/struct.CudaExchangeItem.html\" title=\"struct rust_cuda::utils::exchange::buffer::CudaExchangeItem\">CudaExchangeItem</a>&lt;T, M2D, M2H&gt;"],["impl&lt;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"rust_cuda/utils/ffi/struct.DeviceConstPointer.html\" title=\"struct rust_cuda::utils::ffi::DeviceConstPointer\">DeviceConstPointer</a>&lt;T&gt;"],["impl&lt;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"rust_cuda/utils/ffi/struct.DeviceMutPointer.html\" title=\"struct rust_cuda::utils::ffi::DeviceMutPointer\">DeviceMutPointer</a>&lt;T&gt;"],["impl&lt;T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"rust_cuda/utils/ffi/struct.DeviceOwnedPointer.html\" title=\"struct rust_cuda::utils::ffi::DeviceOwnedPointer\">DeviceOwnedPointer</a>&lt;T&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()