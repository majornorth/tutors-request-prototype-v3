/* ==========================================================================
   Author's custom scripts
   ========================================================================== */


jQuery(document).ready(function() {
  $('.tab-option').click(function() {
    toggleTab(this);
  });

  function toggleTab(element) {
    if ($(element).hasClass("selected")) {
      $(element).removeClass("selected");
    } else {
      $(element).siblings().removeClass("selected");
      $(element).addClass("selected");
    }
  };

  $('.add-question').click(function() {
    addQuestion(this);
  });

  function addQuestion(element) {
    $("<input class='form-control specific-question' placeholder='e.g. I&#39;m stuck on problem 2 of the assignment'></input>").insertBefore($(element));
  }

  $(".get-matches").click(function() {
      var setTitle = $(".subject-search").val();
      var courseTitle = $(".course-title")[0].innerHTML;
      if (setTitle.length !== 0) {
        $(".course-title")[0].innerHTML = setTitle;
        $(".course-title")[1].innerHTML = setTitle;
      } else {
        console.log("cannot be empty!");
      }
    })
});
