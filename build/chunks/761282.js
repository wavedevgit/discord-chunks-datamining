/** Chunk was on 61195 **/
n.d(t, {
  JE: () => u,
  ct: () => s,
  dc: () => c
});
var i = n(200651);
n(192379);
var o = n(261600),
  r = n(157925),
  a = n(180851);
let l = {
  [r.gD]: new o.U
};

function c(e) {
  var t;
  let n = e.application_id;
  if (null == n) return;
  let i = l[n];
  if (null != i && (null === (t = i.shouldShow) || void 0 === t ? void 0 : t.call(i, e)) !== !1) return i.createHeader(e)
}

function s(e) {
  var t;
  let n = e.application_id;
  if (null == n) return;
  let o = l[n];
  if ((null == o ? void 0 : o.body) != null && (null === (t = o.shouldShow) || void 0 === t ? void 0 : t.call(o, e)) !== !1) {
    let t = o.body;
    return (0, i.jsx)("section", {
      className: a.section,
      children: (0, i.jsx)(t, {
        activity: e
      })
    }, "delegate-".concat(n))
  }
}

function u(e) {
  var t;
  let n = e.application_id;
  if (null == n) return !0;
  let i = l[n];
  return null == i || (null === (t = i.shouldShow) || void 0 === t ? void 0 : t.call(i, e)) !== !1
}