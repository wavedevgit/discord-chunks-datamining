/** Chunk was on 86915 **/
/** chunk id: 975316, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  B: () => h,
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
    section: s,
    sectionId: u,
    webhooks: h,
    editedWebhook: g,
    isFetching: p,
    errors: m
  } = (0, l.cj)([o.Z], () => o.Z.getProps(), []);
  return null == r || null == n ? null : (0, i.jsx)(a.Z, {
    guild: r,
    channel: n,
    section: s,
    sectionId: u,
    webhooks: h,
    editedWebhook: g,
    isFetchingWebhooks: p,
    hasChanges: o.Z.hasChanges,
    errors: m,
    refToScroller: t
  })
}

function h() {
  let {
    channel: e,
    submitting: t
  } = (0, Chunk442837.cj)([Chunk388610.Z], () => Chunk388610.Z.getProps()), n = (0, Chunk442837.e7)([Chunk533947.Z], () => Chunk533947.Z.editedWebhook), a = (0, Chunk442837.e7)([Chunk430824.Z], () => null != module ? Chunk430824.Z.getGuild(module.getGuildId()) : null, [module]);
  return (0, Chunk951288.jsx)(Chunk796027.Z, {
    submitting: exports,
    onReset: () => {
      Chunk139387.Z.init()
    },
    onSave: () => {
      null != Chunk490655 && null != require && Chunk139387.Z.saveWebhook(Chunk490655.id, require)
    }
  })
}