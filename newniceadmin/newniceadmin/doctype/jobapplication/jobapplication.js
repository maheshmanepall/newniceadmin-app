// Copyright (c) 2024, mahesh and contributors
// For license information, please see license.txt

// frappe.ui.form.on("JobApplication", {
// 	refresh(frm) {

// 	},
// });



frappe.ui.form.on('JobApplication', {
    refresh: function(frm) {
        // Add a custom button
        frm.add_custom_button(__('Mahesh'), function() {
            frappe.msgprint(__('Button Clicked!'));
            // Your custom functionality here
        });
    }
});

frappe.ui.form.on('JobApplication', {
    refresh: function(frm) {
        // Change background color of the form
        frm.$wrapper.find('.form-layout').css('background-color', '#b09fc9');  // Change to desired color
    }
});

frappe.ui.form.on('JobApplication', {
    refresh: function(frm) {
        // Change label color dynamically
        $('label').css('color', 'green'); // Change 'blue' to the color of your choice
    }
});

// frappe.ui.form.on('JobApplication', {
//     refresh: function(frm) {
//         // Apply a background image to the form's main wrapper
//         let backgroundImageUrl = '/home/mahesh/Downloads/the alchemist.jpeg';  // Replace with the correct image path
        
//         // Add background image using inline CSS
//         $(frm.wrapper).css({
//             'background-image': `url(${backgroundImageUrl})`,
//             'background-size': 'cover',
//             'background-repeat': 'no-repeat',
//             'background-position': 'center',
//             'height': '100%',
//             'min-height': '500px'  // Adjust based on your design
//         });
//     }
// });

