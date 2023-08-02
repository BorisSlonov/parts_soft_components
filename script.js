/* detecting mobile and low-width device */
var isMobile = false, isMobile2 = false, isMobile3 = false; //initiate as false
// device detection
if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;

function doViewWidth() {
    if ($(window).width() <= 1024) {
        isMobile2 = true;
    }
    else {
        isMobile2 = false;
    }
}



var resizeTimer;
$(window).resize(function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(doViewWidth, 100);
});

$(document).ready(function () {

    doViewWidth();

    /* tooltips laximo tooltip's */
    $('.b-btn-laximo-tooltip').each(function(){
        $(this).tooltip({
            html:true,
            //trigger: 'click',
            //placement: 'bottom',
            sanitize: false,
            title: $(this).next('.b-data-laximo-tooltip').html()
        });
    });

    $('.b-lmc-more-info').each(function(){
        $(this).tooltip({
            html:true,
            title: $(this).next('.b-lmc-more-tooltip').html()
        });
    });

    /* laximo nav tabs */
    $('.b-lmc-tabs-nav a').on('click', function (e) {
        e.preventDefault();
        if (!$(this).hasClass('active')) {
            let newTabIndex = $(this).index();
            $('.b-lmc-tabs-nav a').removeClass('active');
            $('.b-lmc-nav-tabs .tab-pane').removeClass('active show');
            $('.b-lmc-tabs-nav a').eq(newTabIndex).addClass('active');
            $('.b-lmc-nav-tabs .tab-content > div').eq(newTabIndex).tab('show');
        }
    });

	/* select in forms */
	$('.b-select').select2({
		minimumResultsForSearch: Infinity,
		dropdownCssClass: 'b-select-dropdown',
		dropdownPosition: 'below'
	});

    /* select with search in forms */
    $('.b-select-with-search').select2({
        //minimumResultsForSearch: Infinity,
        dropdownCssClass: 'b-select-dropdown',
        dropdownPosition: 'below'
    });

    /* select with alowclear */
    $('.b-select-with-clear').select2({
        minimumResultsForSearch: Infinity,
        dropdownCssClass: 'b-select-dropdown',
        dropdownPosition: 'below',
        placeholder: '',
        allowClear: true
    });

	/* tooltips order info */

    $('.b-mor-info-btn').each(function(){
        $(this).tooltip({
            html:true,
            title: $(this).next('.b-mor-link-info-title').html()
        });
    });



    /* commons tooltips */
    if (!isMobile && !isMobile2) {
        $('[data-toggle="tooltip"]').each(function () {
            $(this).tooltip({});
        });
    }

    /* custom file input */
    if ($('.custom-file-input').length) {
        document.querySelector('.custom-file-input').addEventListener('change', function (e) {
            var fileName = document.getElementById("input_file_custom").files[0].name;
            var nextSibling = e.target.nextElementSibling
            nextSibling.innerText = fileName
        });
    }

    $('.gor-order-hidden-list, .b-autos-recommend-list-box').on('show.bs.collapse', function () {
        $(this).parent().parent().prev('tr').addClass('tr-open');
    });
    $('.gor-order-hidden-list, .b-autos-recommend-list-box').on('hidden.bs.collapse', function () {
        $(this).parent().parent().prev('tr').removeClass('tr-open');
    });

    /* chat mobile toggler */
    $('.b-vqd-btn-mob-chat-show').click(function () {
        $('body').addClass('b-state-chat-open');
        return false;
    });

    $('.b-vqd-col-chat .b-close').click(function () {
        $('body').removeClass('b-state-chat-open');
        return false;
    });

    /* garage recommendation tabs */
    $('.b-grt-nav a').on('click', function (e) {
        e.preventDefault();
        if (!$(this).hasClass('active')) {
            let newTabIndex = $(this).index();
            $(this).parent().parent('.b-gar-rec-tabs').find('.b-grt-nav a').removeClass('active');
            $(this).parent().parent('.b-gar-rec-tabs').find('.b-grt-tabs > div').removeClass('active show');
            $(this).parent().parent('.b-gar-rec-tabs').find('.b-grt-nav a').eq(newTabIndex).addClass('active');
            $(this).parent().parent('.b-gar-rec-tabs').find('.b-grt-tabs > div').eq(newTabIndex).tab('show');
        }
    });



    /* catalog-avail one collapse open */
    var $myGroup = $('.b-cav-group');
    $myGroup.on('show.bs.collapse','.collapse', function() {
        $myGroup.find('.collapse.show').collapse('hide');
    });

});

