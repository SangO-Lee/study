function check_reserve() {

    var Category3 = $('#agree1');

    if ($(':checkbox[name="agree1"]:checked').length < 1) {
        alert('개인정보취급방침에 동의해주세요');
        Category3.focus();
        event.preventDefault();
        return false;
    }
    
    //예약 날짜 선택
    if ($("#reserve_date1").val() == "") {
        alert("예약날짜를 선택해주세요.");
        return false;
    }

    //진료과목  선택
    if ($("#reserve_subject").val() == "") {
        alert("진료과목을 선택해주세요.");
        return false;
    }

    //예약 시간 선택
    if ($("#reserve_time").val() == "") {
        alert("예약시간을 선택해주세요.");
        return false;
    }


    //초재진여부
    var Category1 = $('#reserve_visit1');

    if ($(':radio[name="reserve_visit"]:checked').length < 1) {
        alert('초진/재진 여부를 선택해주세요');
        Category1.focus();
        event.preventDefault();
        return false;
    }

    //성함 입력
    if ($("#reserve_name").val() == "") {
        alert("성함을 입력해주세요.");
        return false;
    }

    //성별선택
    var Category2 = $('#reserve_sex1');

    if ($(':radio[name="reserve_sex"]:checked').length < 1) {
        alert('성별을 선택해주세요');
        Category2.focus();
        event.preventDefault();
        return false;
    }

    //생년월일
    if ($("#reserve_birth").val() == "") {
        alert("생년월일을 입력해주세요.");
        return false;
    }

    //휴대전화
    if ($("#reserve_phone2").val().length != 4) {
        alert("휴대폰 번호 앞자리를 네 자리로 입력하세요.");
        return false;
    }
    if ($("#reserve_phone3").val().length != 4) {
        alert("휴대폰 번호 뒷자리를 네 자리로 입력하세요.");
        return false;
    }

}




$(document).ready(function () {
    //히든값에 원장님 정보 전달
    $('#reserve_doctor').change(function (date) {
        $("#reserve_staff").val(this.value);
        $("#reserve_date1").val(''); // 예약일 초기화
        if ($('#reserve_staff').val() == "성창훈원장님") {
            $('#mydate').show();
            $('#mydate2').hide();

        } else if ($('#reserve_staff').val() == "박태용원장님") {
            $('#mydate').hide()
            $('#mydate2').show();

        } else {}
    });


    //예약 시간 선택 시
    $("select#reserve_time").change(function () {
        if (!$("#reserve_staff").val()) {
            alert("클리닉 및 원장님을 먼저 선택해주세요.");
            $(this).prop('selectedIndex', 0);
            return false;
        }

    })
});
$(function () {
    $("#mydate").datepicker({
        dateFormat: 'yy-mm-dd',
        minDate: 7,
        maxDate: 100,
        firstDay: 0,
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'], //달력의 월 부분 Tooltip 텍스트
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'], //달력의 요일 부분 텍스트
        dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'], //달력의 요일 부분 Tooltip 텍스트
        isRTL: false,
        beforeShowDay: function (date) {
            var dateArray = ["9999-12-31", "2021-08-14", "2021-08-13", "2021-08-12", ];
            var day = date.getDay();
            // First convert all values in dateArray to date Object and compare with current date
            var dateFound = dateArray.find(function (item) {
                var formattedDate = new Date(item);
                return date.toLocaleDateString() === formattedDate.toLocaleDateString();
            })
            // check if date is in your array of dates
            if (dateFound) {
                // if it is return the following.
                return [false, 'css-class-to-highlight', 'tooltip text'];
            } else {
                // default
                // Disable all sundays
                return [(day != 0), '', ''];
            }

        },
        showMonthAfterYear: true,
        onSelect: function (dateText) {
            $("#reserve_date1").val(dateText);

            var date = $(this).datepicker('getDate');
            var dayOfWeek = date.getUTCDay();
            var doct = $("#reserve_staff").val();

            $("#hidden_reserve_date").val(dayOfWeek);

            if ($("#reserve_staff").val() == "") {
                alert("의료진선택을 먼저 해주세요");
                $("#reserve_date1").val('');
                $("#reserve_date1").focus();
                return false;
            }

            if (doct == "성창훈원장님" && dayOfWeek == "1" || doct == "성창훈원장님" && dayOfWeek == "3" || doct == "성창훈원장님" && dayOfWeek == "5") {
                $("#reserve_time option:eq(4)").attr("disabled", true);
                $("#reserve_time option:eq(5)").attr("disabled", true);
                $("#reserve_time option:eq(6)").attr("disabled", true);

            } else if (doct == "박태용원장님" && dayOfWeek == "2" || doct == "박태용원장님" && dayOfWeek == "5") {
                $("#reserve_time option:eq(4)").attr("disabled", true);
                $("#reserve_time option:eq(5)").attr("disabled", true);
                $("#reserve_time option:eq(6)").attr("disabled", true);
            } else {
                $("#reserve_time option:eq(4)").removeAttr("disabled");
                $("#reserve_time option:eq(5)").removeAttr("disabled");
                $("#reserve_time option:eq(6)").removeAttr("disabled");
            }

        }
    });


    $("#mydate2").datepicker({
        dateFormat: 'yy-mm-dd',
        minDate: 7,
        maxDate: 100,
        firstDay: 0,
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'], //달력의 월 부분 Tooltip 텍스트
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'], //달력의 요일 부분 텍스트
        dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'], //달력의 요일 부분 Tooltip 텍스트
        isRTL: false,
        beforeShowDay: function (date) {
            var dateArray = ["9999-12-31", "2021-10-04", "2021-10-02", "2021-10-01", ];
            var day = date.getDay();
            // First convert all values in dateArray to date Object and compare with current date
            var dateFound = dateArray.find(function (item) {
                var formattedDate = new Date(item);
                return date.toLocaleDateString() === formattedDate.toLocaleDateString();
            })
            // check if date is in your array of dates
            if (dateFound) {
                // if it is return the following.
                return [false, 'css-class-to-highlight', 'tooltip text'];
            } else {
                // default
                // Disable all sundays
                return [(day != 0), '', ''];
            }

        },
        showMonthAfterYear: true,
        onSelect: function (dateText) {
            $("#reserve_date1").val(dateText);

            var date = $(this).datepicker('getDate');
            var dayOfWeek = date.getUTCDay();
            var doct = $("#reserve_staff").val();

            $("#hidden_reserve_date").val(dayOfWeek);

            if ($("#reserve_staff").val() == "") {
                alert("의료진선택을 먼저 해주세요");
                $("#reserve_date1").val('');
                $("#reserve_date1").focus();
                return false;
            }

            if (doct == "성창훈원장님" && dayOfWeek == "1" || doct == "성창훈원장님" && dayOfWeek == "3" || doct == "성창훈원장님" && dayOfWeek == "5") {
                $("#reserve_time option:eq(4)").attr("disabled", true);
                $("#reserve_time option:eq(5)").attr("disabled", true);
                $("#reserve_time option:eq(6)").attr("disabled", true);

            } else if (doct == "박태용원장님" && dayOfWeek == "2" || doct == "박태용원장님" && dayOfWeek == "5") {
                $("#reserve_time option:eq(4)").attr("disabled", true);
                $("#reserve_time option:eq(5)").attr("disabled", true);
                $("#reserve_time option:eq(6)").attr("disabled", true);
            } else {
                $("#reserve_time option:eq(4)").removeAttr("disabled");
                $("#reserve_time option:eq(5)").removeAttr("disabled");
                $("#reserve_time option:eq(6)").removeAttr("disabled");
            }

        }
    });





});