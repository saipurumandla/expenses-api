
declare var $: any;
export class GenricHelper {
    timeDifference: number;
    constructor(

    ) { }
    displayAlert(message) {
        $('.message').html(message);
        $('.message').removeClass('alert-peek');
        setTimeout(function () { $('.message').addClass('alert-peek'); }, 2000);
    }
    displayMessage(message) {
         // console.log(message);
        $('.message-alert').html('<i class="fa fa-check-circle" aria-hidden="true"></i> ' + message);
        $('.message-alert').removeClass('alert-peek');
        setTimeout(function () { $('.message-alert').addClass('alert-peek'); }, 2000);
    }
    displayNetworkError() {
        $('.network-error').removeClass('alert-peek');
    }
    hideNetworkError() {
        $('.network-error').addClass('alert-peek');
    }
    displayRefresh() {
        $('.refresh-page').removeClass('alert-peek');
    }
    hideRefresh() {
        $('.refresh-page').addClass('alert-peek');
    }
    refreshPage() {
        $('html,body').animate({ scrollTop: 0 });
        // location.reload();
        this.hideRefresh();
    }

}
