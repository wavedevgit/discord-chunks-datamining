/** Chunk was on web.js **/
/** chunk id: 587771, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => a,
  O: () => s
});
var Chunk331250 = require("./331250.js"),
  Chunk108146 = require("./108146.js");

function a(e, t, n) {
  let {
    isDisabled: r
  } = e, {
    toolbarProps: a
  } = (0, i.t)(e, n);
  return {
    groupProps: {
      ...a,
      role: "single" === t.selectionMode ? "radiogroup" : a.role,
      "aria-disabled": r
    }
  }
}

function s(e, t, n) {
  let i = {
      isSelected: t.selectedKeys.has(e.id),
      defaultSelected: false,
      setSelected(n) {
        t.setSelected(e.id, n)
      },
      toggle() {
        t.toggleKey(e.id)
      }
    },
    {
      isPressed: a,
      isSelected: s,
      isDisabled: o,
      buttonProps: l
    } = (0, r.q)({
      ...e,
      id: true,
      isDisabled: e.isDisabled || t.isDisabled
    }, i, n);
  return "single" === t.selectionMode && (l.role = "radio", l["aria-checked"] = i.isSelected, delete l["aria-pressed"]), {
    isPressed: a,
    isSelected: s,
    isDisabled: o,
    buttonProps: l
  }
}