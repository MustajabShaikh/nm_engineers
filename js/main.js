(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('sticky-top shadow');
        } else {
            $('.nav-bar').removeClass('sticky-top shadow');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Service carousel
    $(".service-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 25,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });

    //Valve slider modal
    $(document).ready(function() {
        $('#valveModal').on('shown.bs.modal', function (event) {
            var button = $(event.relatedTarget); // Button that triggered the modal
            var valve = button.data('valve'); // Extract info from data-* attributes
            var modal = $(this);
            modal.find('.modal-title').text(valve + ' Details');
    
            var valveDetails = '';
            var valveImageSrc = '';
    
            if(valve === 'Ball Valve') {
                valveDetails = 'A ball valve is a type of valve that controls the flow of a liquid or gas through a hollow, pivoting ball with a hole through its center. When the valve is open, the hole aligns with the pipeline, allowing fluid to flow through. Rotating the valve 90 degrees closes the valve, blocking the flow by positioning the solid part of the ball against the valve\'s seats. This design allows for quick, reliable operation and tight sealing, making ball valves ideal for applications where on/off control is needed without leakage. They come in various materials and sizes to accommodate different environments and flow requirements, from household plumbing to heavy industrial use.';
                valveImageSrc = './img/ball-valv.jpg';
            } else if(valve === 'Globe Valve'){
                valveDetails = 'A globe valve is a type of linear motion valve used to regulate or stop the flow of fluid in a pipeline. It features a globe-shaped body with an internal baffle that directs flow and controls the opening and closing of a movable disk (or plug) against a stationary ring seat. This design allows for precise throttling of flow, making globe valves suitable for applications requiring fine flow control. They are commonly used in industries such as oil and gas, power generation, and water treatment. Globe valves are available in various materials and configurations to accommodate different pressures, temperatures, and fluid types.';
                valveImageSrc = './img/globe-valve.jpg';
            } else if(valve === 'Butterfly Valve'){
                valveDetails = 'A butterfly valve is a quarter-turn rotational valve that uses a disc mounted on a rod to control flow. The disc is positioned in the center of the pipe and pivots 90 degrees to allow or block flow. When open, the disc is parallel to the flow direction, minimizing pressure drop. They are lightweight, compact, and operate quickly, making them suitable for large-scale applications like HVAC, water distribution, and industrial processes. Butterfly valves come in various types, including concentric, eccentric, and triple offset, each offering different sealing mechanisms and capabilities for handling different pressures and temperatures. Their versatility and ease of operation make them popular across industries requiring efficient flow control.';
                valveImageSrc = './img/butterfly-valve.jpg';
            } else if(valve === 'Gate Valve'){
                valveDetails = 'A gate valve is a linear motion valve used to start or stop the flow of fluid. It features a flat or wedge-shaped gate that moves up and down perpendicular to the flow direction, providing a straight-through flow with minimal resistance when fully open. The gate is housed in the valve body and is raised or lowered by turning a handwheel or actuator. When fully closed, the gate fits snugly into the seats, ensuring a tight seal to prevent leakage. Gate valves are robust and durable, making them ideal for applications involving high pressures and temperatures. They are commonly used in water supply systems, oil and gas industries, and other industrial processes where full-flow or no-flow conditions are required. While not suitable for throttling due to potential damage to the gate and seats, gate valves are valued for their reliability and low maintenance in on/off control applications.';
                valveImageSrc = './img/gate-valve.jpg';
            } else if(valve === 'Check Valve'){
                valveDetails = 'A check valve is a type of valve that allows fluid to flow in one direction only, preventing backflow. The valve operates automatically and is typically used to protect equipment from damage caused by reverse flow. The internal mechanism, which can be a flap, ball, or diaphragm, opens to allow flow in the forward direction and closes when flow reverses, ensuring a unidirectional flow. Check valves are compact, simple, and reliable, making them suitable for a wide range of applications, including pumps, compressors, and pipelines. There are several types of check valves, including swing check valves, lift check valves, and ball check valves, each designed to handle different flow characteristics and system requirements. Their ability to prevent backflow and ensure the proper operation of fluid systems makes them an essential component in various industries, including water treatment, oil and gas, and chemical processing.';
                valveImageSrc = './img/check-valve.jpg';
            } else if(valve === 'Control Valve'){
                valveDetails = 'A control valve is a valve used to regulate the flow of a fluid by varying the size of the flow passage. It is an essential part of a control loop, allowing precise control of fluid flow, pressure, temperature, or level. Control valves can be operated manually or automatically by an actuator, which is controlled by an external input such as a signal from a control system. The valve consists of a body, bonnet, actuator, and internal trim, which includes the plug and seat. Control valves come in various types, including globe, ball, butterfly, and diaphragm valves, each suited for specific applications and operating conditions. They are widely used in industries such as oil and gas, chemical processing, power generation, and water treatment, where maintaining precise control over process variables is critical for efficient and safe operation. Proper selection, installation, and maintenance of control valves are essential to ensure their optimal performance and longevity.';
                valveImageSrc = './img/control_valve.jpg';
            } else if(valve === 'Diaphragm Valve'){
                valveDetails = 'A diaphragm valve is a type of valve that uses a flexible diaphragm to regulate the flow of fluid. The diaphragm is pressed against a seat at the top of the valve body to seal the flow path. When the diaphragm is lifted, the flow path is opened, allowing fluid to pass through. Diaphragm valves are known for their simplicity, reliability, and ease of maintenance. They are particularly suited for handling corrosive fluids, slurries, and viscous materials, making them ideal for applications in the chemical processing, pharmaceutical, and food and beverage industries. Diaphragm valves are available in various materials and configurations to accommodate different operating conditions and requirements.';
                valveImageSrc = './img/diaphragm-valve.jpg';
            } else if(valve === 'Plug Valve'){
                valveDetails = 'A plug valve is a type of valve that uses a cylindrical or tapered plug to control the flow of fluid. The plug has a passage through it that allows fluid to flow through when aligned with the ports of the valve body. By rotating the plug, the flow can be started or stopped. Plug valves are known for their simple design, quick operation, and ability to provide a tight seal. They are widely used in applications requiring on/off control, including gas pipelines, chemical processing, and water treatment. Plug valves are available in various materials and configurations, including lubricated and non-lubricated types, to suit different pressures, temperatures, and fluid characteristics.';
                valveImageSrc = './img/plug_valve.jpg';
            } else if(valve === 'Needle Valve'){
                valveDetails = 'A needle valve is a type of valve that allows precise control of fluid flow by using a slender, tapered needle-like plunger. The needle is threaded through a valve seat, and as it is turned, it moves in or out of the seat, varying the flow rate. Needle valves are used in applications where accurate, fine control of flow is required, such as in instrumentation, fuel regulation, and hydraulic systems. They are capable of handling high pressures and are commonly made from materials that can withstand corrosive environments. Needle valves are valued for their precision, reliability, and ability to provide leak-proof operation.';
                valveImageSrc = './img/needle_valve.jpg';
            } else {
                valveDetails = 'An industrial valve is a mechanical device used to regulate the flow and pressure of fluids in a system. These valves are crucial in various industries such as oil and gas, water treatment, chemical processing, and power generation. They consist of a body, bonnet, actuator, and closure element like a disc, ball, gate, or plug. Valves come in various types, each suited for specific applications. For example, gate valves offer low flow resistance and full-bore flow for on/off control, while globe valves provide excellent throttling capabilities. Industrial valves are designed to handle a range of pressures and temperatures, ensuring safe and efficient operation in different environments. Proper selection and maintenance are key to their optimal performance and longevity.';
                valveImageSrc = './img/valv3.jpg';
            }
    
            modal.find('#valveDetails').text(valveDetails);
            modal.find('#valveImage').attr('src', valveImageSrc);
        });
    
        // Initialize Owl Carousel
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            autoplay: true,
            autoplayTimeout: 3000, 
            dots: false, // Hide indicators
            nav: false, // Set to false to hide navigator buttons
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    });
})(jQuery);

