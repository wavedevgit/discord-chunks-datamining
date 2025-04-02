/** Chunk was on 35755 **/
n.d(t, {
  Z: () => c
});
var i = n(990547),
  r = n(442837),
  l = n(213609),
  o = n(541099),
  a = n(312871);

function c(e) {
  let {
    applicationId: t,
    applicationFlags: n,
    sectionName: c,
    sectionPosition: s,
    sectionOverallPosition: d
  } = e, u = (0, r.e7)([o.Z], () => o.Z.entrypoint());
  return {
    trackItemImpressionRef: (0, a.Z)({
      onVisible: () => {
        (0, l.h)({
          type: i.ImpressionTypes.VIEW,
          name: i.ImpressionNames.APP_LAUNCHER_ITEM,
          properties: {
            application_id: t,
            application_flags: n,
            section_name: c,
            section_position: s,
            section_overall_position: d,
            source: u
          }
        })
      },
      threshold: .5,
      minTimeVisibleMs: 1e3
    })
  }
}