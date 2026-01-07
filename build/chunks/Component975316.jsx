/** Chunk was on 86915 **/
/** chunk id: 975316, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  B: () => h,
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk796027 = require("./796027.jsx"),
  Chunk139387 = require("./139387.js"),
  Chunk490655 = require("./490655.jsx"),
  Chunk533947 = require("./533947.js"),
  Chunk388610 = require("./388610.js"),
  Chunk430824 = require("./430824.js");

function u(e) {
  let {
    refToScroller: t
  } = e, n = (0, l.e7)([c.Z], () => c.Z.getChannel(), []), r = (0, l.e7)([d.Z], () => null != n ? d.Z.getGuild(n.getGuildId()) : null, [n]), {
    section: a,
    sectionId: u,
    webhooks: h,
    editedWebhook: g,
    isFetching: m,
    errors: f
  } = (0, l.cj)([o.Z], () => o.Z.getProps(), []);
  return null == r || null == n ? null : (0, i.jsx)(s.Z, {
    guild: r,
    channel: n,
    section: a,
    sectionId: u,
    webhooks: h,
    editedWebhook: g,
    isFetchingWebhooks: m,
    hasChanges: o.Z.hasChanges,
    errors: f,
    refToScroller: t
  })
}

function h() {
  let {
    channel: e,
    submitting: t
  } = (0, l.cj)([c.Z], () => c.Z.getProps()), n = (0, l.e7)([o.Z], () => o.Z.editedWebhook), s = (0, l.e7)([d.Z], () => null != e ? d.Z.getGuild(e.getGuildId()) : null, [e]);
  return (0, i.jsx)(r.Z, {
    submitting: t,
    onReset: () => {
      a.Z.init()
    },
    onSave: () => {
      null != s && null != n && a.Z.saveWebhook(s.id, n)
    }
  })
}