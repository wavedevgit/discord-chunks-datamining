/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => u
});
var r = n(200651);
n(192379);
var i = n(215569),
  s = n(481060),
  a = n(852860),
  l = n(236413),
  o = n(727072),
  c = n(65912),
  A = n(388032),
  d = n(205166);

function u(e) {
  let {
    guildId: t,
    existingRules: n
  } = e, {
    cancelEditingRule: u,
    isLoading: g,
    hasChanges: f,
    editingRule: m,
    errorMessage: p,
    saveEditingRule: h
  } = (0, c.w)(), {
    updateRule: C
  } = (0, o.pH)(t), b = null != m, v = b && !(0, l.Vb)(m), x = b || f || v, N = async () => {
    if (!f && !v) return u();
    null == m || v || C(m);
    let e = n.find(e => {
      let {
        id: t
      } = e;
      return t === (null == m ? void 0 : m.id)
    });
    try {
      let e = await h(n);
      null != e && C(e)
    } catch (t) {
      null != e && C(e)
    }
  }, j = A.NW.string(A.t["ETE/oK"]), E = !f && b ? A.NW.formatToPlainString(A.t.nula39, {
    ruleName: null == m ? void 0 : m.name
  }) : void 0;
  return null != p && (E = (0, r.jsx)(s.Text, {
    variant: "text-md/normal",
    color: "text-danger",
    className: d.message,
    children: p
  })), (0, r.jsx)(i.W, {
    component: "div",
    className: d.saveNoticeContainer,
    children: x && (0, r.jsx)(s.oXn, {
      children: (0, r.jsx)(a.Z, {
        submitting: g,
        disabled: g,
        onSave: N,
        onReset: u,
        onResetText: j,
        message: E
      })
    })
  })
}