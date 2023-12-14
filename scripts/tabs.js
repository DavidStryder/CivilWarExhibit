$('#tab-roster').click(function() {
    $('#roster-tab').removeClass('hidden')
    $('#coach-tab').addClass('hidden')
    $('#training-tab').addClass('hidden')
    $('#faq-tab').addClass('hidden')

    $('#tab-roster').addClass('tab-button-current')
    $('#tab-coaches').removeClass('tab-button-current')
    $('#tab-facility').removeClass('tab-button-current')
    $('#tab-faq').removeClass('tab-button-current')

    $('#tab-roster').removeClass('tab-button')
    $('#tab-coaches').addClass('tab-button')
    $('#tab-facility').addClass('tab-button')
    $('#tab-faq').addClass('tab-button')

})
$('#tab-coaches').click(function() {
    $('#roster-tab').addClass('hidden')
    $('#coach-tab').removeClass('hidden')
    $('#training-tab').addClass('hidden')
    $('#faq-tab').addClass('hidden')

    $('#tab-roster').removeClass('tab-button-current')
    $('#tab-coaches').addClass('tab-button-current')
    $('#tab-facility').removeClass('tab-button-current')
    $('#tab-faq').removeClass('tab-button-current')

    $('#tab-roster').addClass('tab-button')
    $('#tab-coaches').removeClass('tab-button')
    $('#tab-facility').addClass('tab-button')
    $('#tab-faq').addClass('tab-button')

})

$('#tab-facility').click(function() {
    $('#roster-tab').addClass('hidden')
    $('#coach-tab').addClass('hidden')
    $('#training-tab').removeClass('hidden')
    $('#faq-tab').addClass('hidden')

    $('#tab-roster').removeClass('tab-button-current')
    $('#tab-coaches').removeClass('tab-button-current')
    $('#tab-facility').addClass('tab-button-current')
    $('#tab-faq').removeClass('tab-button-current')

    $('#tab-roster').addClass('tab-button')
    $('#tab-coaches').addClass('tab-button')
    $('#tab-facility').removeClass('tab-button')
    $('#tab-faq').addClass('tab-button')

})

$('#tab-faq').click(function() {
    $('#roster-tab').addClass('hidden')
    $('#coach-tab').addClass('hidden')
    $('#training-tab').addClass('hidden')
    $('#faq-tab').removeClass('hidden')

    $('#tab-roster').removeClass('tab-button-current')
    $('#tab-coaches').removeClass('tab-button-current')
    $('#tab-facility').removeClass('tab-button-current')
    $('#tab-faq').addClass('tab-button-current')

    $('#tab-roster').addClass('tab-button')
    $('#tab-coaches').addClass('tab-button')
    $('#tab-facility').addClass('tab-button')
    $('#tab-faq').removeClass('tab-button')

})
