/// <reference path="./jquery-3.1.0.min.js" />

$(function () {
    $('#submit-button').click(function () {
        date = new Date();
        var ajax = $.ajax({
            type: 'GET',
            url: 'http://api.jugemkey.jp/api/horoscope/free/' + getFormattedDate(new Date()),

            // 通信成功時の処理
            success: function (result, textStatus, xhr) {
                // 入力値を初期化
                // console.log($.parseXML(result.responseText).find('body'));

                var responseText = $.parseXML(result.responseText);
                var text = $(responseText).find('body').text();
                var json = $.parseJSON(text);

            },

            // 通信失敗時の処理
            error: function (xhr, textStatus, error) {
                console.error(textStatus);
                alert('NG...');
            }
        })

    });

    function getFormattedDate(date) {
        return date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
    }

})