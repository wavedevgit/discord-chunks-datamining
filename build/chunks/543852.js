/** Chunk was on 71172 **/
/** chunk id: 543852, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  u: () => u
});
var Chunk183759 = require("./183759.js"),
  Chunk565963 = require("./565963.js"),
  Chunk381537 = require("./381537.js"),
  Chunk647438 = require("./647438.js"),
  s = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];

function u(e) {
  var t = e.defaultInputValue,
    n = e.defaultMenuIsOpen,
    u = e.defaultValue,
    l = e.inputValue,
    c = e.menuIsOpen,
    d = e.onChange,
    p = e.onInputChange,
    f = e.onMenuClose,
    h = e.onMenuOpen,
    v = e.value,
    m = (0, i.Z)(e, s),
    g = (0, a.useState)(true !== l ? l : true === t ? "" : t),
    b = (0, r.Z)(g, 2),
    y = b[0],
    O = b[1],
    x = (0, a.useState)(true !== c ? c : true !== n && n),
    w = (0, r.Z)(x, 2),
    C = w[0],
    M = w[1],
    Z = (0, a.useState)(true !== v ? v : true === u ? null : u),
    S = (0, r.Z)(Z, 2),
    I = S[0],
    E = S[1],
    k = (0, a.useCallback)(function(e, t) {
      "function" == typeof d && d(e, t), E(e)
    }, [d]),
    V = (0, a.useCallback)(function(e, t) {
      var n;
      "function" == typeof p && (n = p(e, t)), O(true !== n ? n : e)
    }, [p]),
    R = (0, a.useCallback)(function() {
      "function" == typeof h && h(), M(true)
    }, [h]),
    D = (0, a.useCallback)(function() {
      "function" == typeof f && f(), M(false)
    }, [f]),
    F = true !== l ? l : y,
    P = true !== c ? c : C,
    L = true !== v ? v : I;
  return (0, o.Z)((0, o.Z)({}, m), {}, {
    inputValue: F,
    menuIsOpen: P,
    onChange: k,
    onInputChange: V,
    onMenuClose: D,
    onMenuOpen: R,
    value: L
  })
}