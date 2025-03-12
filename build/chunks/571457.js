/** Chunk was on 53494 **/
n.d(t, {
  RI: () => o,
  k5: () => a,
  kR: () => l
});
var r = n(626135),
  i = n(981631);

function o(e) {
  let {
    selectedTab: t
  } = e;
  r.default.track(i.rMx.GLOBAL_DISCOVERY_VIEWED, {
    selected_tab: t
  })
}

function l(e) {
  let {
    selectedCategoryId: t
  } = e;
  r.default.track(i.rMx.GLOBAL_DISCOVERY_SERVERS_VIEWED, {
    selected_category_id: t
  })
}

function a(e) {
  let {
    source: t
  } = e;
  r.default.track(i.rMx.GLOBAL_DISCOVERY_ENTRYPOINT_CLICKED, {
    source: t
  })
}