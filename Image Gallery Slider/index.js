$(document).ready(function () {
    $('#divId').on({
        mouseover: function () {
            $(this).css({
                'cursor': 'pointer',
                'border-Color': 'red'
            });
        },
        mouseout: function () {
            $(this).css({
                'cursor': 'default',
                'border-Color': 'grey'
            });
        },
        click: function () {
            var imageURL = $(this).attr('src');
            var effect = $('#selectImgEffect').val();
            var duration = $('#selectImgDuration').val() * 1000;

            if (effect == 'Slide') {
                $('#mainImage').slideUp(duration, function () {
                    $(this).attr('src', imageURL);
                }).slideDown(duration);
            }
            else {
                $('#mainImage').fadeOut(duration, function () {
                    $(this).attr('src', imageURL);
                }).fadeIn(duration);
            }
        }
    }, 'img');

    var mainImageElement = $('#mainImage');
    var height = parseInt(mainImageElement.attr('height'));
    var width = parseInt(mainImageElement.attr('width'))

    $('#btnEnlarge').click(function () {
        height += 100;
        width += 100;
        mainImageElement.animate({ 'height': height, 'width': width });
    });

    $('#btnShrink').click(function () {
        height -= 100;
        width -= 100;
        mainImageElement.animate({ 'height': height, 'width': width });
    });
});