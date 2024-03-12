var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

$(document).ready(function () {
    $('#embed h3').each(function () {
        var tis = $(this), state = false, answer = tis.next('div').hide().css('height', 'auto').slideUp();
        tis.click(function () {
            state = !state;
            answer.slideToggle(state);
            tis.toggleClass('active', state);
        });
    });
});

}
/*
     FILE ARCHIVED ON 18:45:06 May 19, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 05:40:17 Mar 06, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.076
  exclusion.robots.policy: 0.064
  cdx.remote: 0.107
  esindex: 0.01
  LoadShardBlock: 131.152 (6)
  PetaboxLoader3.datanode: 154.272 (7)
  load_resource: 211.096
  PetaboxLoader3.resolve: 145.075
*/