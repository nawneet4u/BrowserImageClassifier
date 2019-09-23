$(document).ready(function () {
    // Init
    $('.image-section').hide();
    $('.loader').hide();
    $('#result').hide();

    // Upload Preview
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
               // $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
               // $('#imagePreview').hide();
               // $('#imagePreview').fadeIn(650);
                $('#uploadedimage').attr('src', e.target.result)
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUpload").change(function () {
        $('.image-section').show();
        $('#btn-predict').show();
        $('#result').text('');
        $('#result').hide();
        readURL(this);
    });

    // Predict
   // $('#btn-predict').click(function () {
    //    var form_data = new FormData($('#upload-file')[0]);

        // Show loading animation
     //   $(this).hide();
      //  $('.loader').show();

$('#btn-predict').click(function(){
async function app() {
  console.log('Loading mobilenet..');

let net;
  // Load the model.
  net = await mobilenet.load();
  console.log('Successfully loaded model');

  // Make a prediction through the model on our image.
  const imgEl = document.getElementById('uploadedimage');
  const result = await net.classify(imgEl);
  console.log(result);
  $('.loader').hide();
  $('#result').fadeIn(600);
  var tempmax=0
  var objIndex=-1;
  for(i=0;i<result.length;i++){
  if(result[i].probability>tempmax)
  {
  tempmax=result[i].probability
  objIndex=i;
  }
  }
  if(objIndex>=0){
  $('#result').text(' Result:  ' + result[objIndex].className);
  }
  console.log('Success!');
}
app();
});
//app();


});


