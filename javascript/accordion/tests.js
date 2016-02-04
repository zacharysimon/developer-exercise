$(document).ready(function() {
  module("Accordion tests");

  test("example test", function() {
    ok(true);
  });

  test("example test- false fails", function() {
    ok(false, "testing qunit. failure is expected");
  });

  test("section descriptions are hidden upon loading", function() {
    ok($(".accordion-header > div").is(':hidden'));
  });

  QUnit.log(function( details ) {
    console.log( "Assertion complete. Details: ", details.result, details.message );
  });
});


