app.factory('services_contact', ['services', '$rootScope', 'toastr', function(services, $rootScope, toastr) {
    let service = { send_email: send_email };
    return service;

    function send_email(name, email, matter, message) {
        services.post('contact', 'send_contact_us', { name: name, email: email, matter: matter, message: message })
            .then(function(response) {
                if (response != "Error!") {
                    toastr.success("Send email");
                } else {
                    toastr.error("Error sending email");
                }
                location.href = "#/home";
                window.location.reload();
                return;
            }, function(error) {});
    }

}]);