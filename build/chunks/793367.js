/** Chunk was on web.js **/
/** chunk id: 793367, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $e: () => y,
  C9: () => b,
  H9: () => _,
  NJ: () => d,
  RH: () => O,
  Yq: () => m,
  _V: () => E,
  a2: () => h
}), require("./446912.js");
var Chunk353640 = require("./353640.js"),
  Chunk121894 = require("./121894.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      s(e, t, n[t])
    })
  }
  return e
}

function c(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function u(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
var d = function(e) {
  return e.VIEWER_SWIPE = "number_viewer_swipes", e.THUMBNAIL_SWIPE = "number_thumbnail_swipes", e.SELECTED_ITEM_CHANGE = "number_selected_item_changes", e.ZOOM_IN_BUTTON_PRESSED = "number_zoom_in_button_pressed", e.ZOOM_IN_IMAGE_PRESSED = "number_zoom_in_image_pressed", e.ZOOM_OUT_BUTTON_PRESSED = "number_zoom_out_button_pressed", e.ZOOM_OUT_IMAGE_PRESSED = "number_zoom_out_image_pressed", e.FORWARD_PRESSED = "number_forward_button_pressed", e.SAVE_MEDIA_PRESSED = "number_save_media_button_pressed", e.OPEN_LINK_PRESSED = "number_open_link_button_pressed", e.MORE_BUTTON_PRESSED = "number_more_button_pressed", e.COPY_IMAGE_PRESSED = "number_copy_image_more_menu_pressed", e.COPY_LINK_PRESSED = "number_copy_link_more_menu_pressed", e.CONTEXT_MENU_OPENED = "number_context_menu_opened", e
}({});
let f = {
    guildId: true,
    channelId: true,
    channelType: true,
    numMediaItems: 0,
    hasMediaOptions: true,
    source: true,
    incrementableActions: Object.fromEntries(Object.values(d).map(e => [e, 0]))
  },
  p = (0, Chunk353640.v)(() => f);

function _(e) {
  (0, i.r)(() => p.setState(l({}, f, e)))
}

function h() {
  let e = p.getState();
  a.default.track(o.HAw.MEDIA_VIEWER_SESSION_COMPLETED, l({
    source: e.source,
    guild_id: e.guildId,
    channel_id: e.channelId,
    channel_type: e.channelType,
    number_media_items: e.numMediaItems,
    has_media_options: e.hasMediaOptions
  }, e.incrementableActions)), (0, i.r)(() => p.setState(l({}, f)))
}

function m(e) {
  (0, i.r)(() => {
    p.setState(t => ({
      incrementableActions: u(l({}, t.incrementableActions), {
        [e]: t.incrementableActions[e] + 1
      })
    }))
  })
}

function g() {
  return {
    channel_id: p.getState().channelId
  }
}

function E(e, t) {
  a.default.track(o.HAw.MEDIA_VIEWER_IMAGE_SAVED, l({
    url: e,
    success: t
  }, g()))
}

function y(e, t) {
  a.default.track(o.HAw.MEDIA_VIEWER_IMAGE_COPIED, l({
    url: e,
    success: t
  }, g()))
}

function b(e, t) {
  a.default.track(o.HAw.MEDIA_VIEWER_LINK_COPIED, l({
    href: e,
    success: t
  }, g()))
}

function O(e) {
  a.default.track(o.HAw.MEDIA_VIEWER_LINK_OPENED, l({
    href: e
  }, g()))
}