var SewerInspectionView = function() {

    this.initialize = function() {
        this.el = $('</div>');
        this.el.on('click', '.add-pic-btn', this.addPicture);
    };

    this.render = function() {
        this.el.html(SewerInspectionView.template());
        return this;
    };

    this.addPicture = function(event) {
        event.preventDefault();
        console.log('addPicture');
        if (!navigator.camera) {
            app.showAlert("Camera API not supported", "Error");
            return;
        }
        var options = {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Photo Album
            encodingType: 0     // 0=JPG 1=PNG
        };

        navigator.camera.getPicture(
            function(imageData) {
                $('#sewerimage').attr('src', "data:image/jpeg;base64," + imageData);
            },
            function() {
                alert('Error taking picture');
            },
            options);

        return false;
    };

    this.initialize();
};

SewerInspectionView.template = Handlebars.compile($("#sewer-lateral-inspection-tpl").html());