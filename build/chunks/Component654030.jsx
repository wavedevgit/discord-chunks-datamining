/** Chunk was on 78888 **/
/** chunk id: 654030, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => u,
  q: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk36525 = require("./36525.jsx"),
  Chunk282956 = require("./282956.js"),
  Chunk875264 = require("./875264.jsx"),
  Chunk291731 = require("./291731.js"),
  Chunk863036 = require("./863036.js"),
  Chunk71393 = require("./71393.js");

function u(e) {
  let {
    refToScroller: t
  } = e, n = (0, i.bG)([c.A], () => c.A.getChannel(), []), r = (0, i.bG)([d.A], () => null != n ? d.A.getGuild(n.getGuildId()) : null, [n]), {
    section: s,
    sectionId: u,
    webhooks: h,
    editedWebhook: g,
    isFetching: m,
    errors: f
  } = (0, i.cf)([o.A], () => o.A.getProps(), []);
  return null == r || null == n ? null : (0, l.jsx)(a.A, {
    guild: r,
    channel: n,
    section: s,
    sectionId: u,
    webhooks: h,
    editedWebhook: g,
    isFetchingWebhooks: m,
    hasChanges: o.A.hasChanges,
    errors: f,
    refToScroller: t
  })
}

function h() {
  let {
    channel: e,
    submitting: t
  } = (0, i.cf)([c.A], () => c.A.getProps()), n = (0, i.bG)([o.A], () => o.A.editedWebhook), a = (0, i.bG)([d.A], () => null != e ? d.A.getGuild(e.getGuildId()) : null, [e]);
  return (0, l.jsx)(r.A, {
    submitting: t,
    onReset: () => {
      s.A.init()
    },
    onSave: () => {
      null != a && null != n && s.A.saveWebhook(a.id, n)
    }
  })
}