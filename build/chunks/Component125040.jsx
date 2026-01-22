/** Chunk was on web.js **/
/** chunk id: 125040, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk631670 = require("./631670.js"),
  Chunk985018 = require("./985018.jsx");

function l(e) {
  let {
    onClose: t
  } = e;
  return (0, r.jsx)(a.MJ3, {
    dismissable: true,
    header: o.intl.string(o.t.UNGZDI),
    confirmText: o.intl.string(o.t.BddRzS),
    confirmButtonColor: i.XD.BRAND,
    onCancel: t,
    onConfirm: t,
    children: (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      children: o.intl.string(o.t.alpAUm)
    })
  })
}

function c(e) {
  let {
    onClose: t
  } = e;
  return (0, r.jsx)(a.MJ3, {
    dismissable: true,
    header: o.intl.string(o.t.I5UrbV),
    confirmText: o.intl.string(o.t.BddRzS),
    confirmButtonColor: i.XD.BRAND,
    onCancel: t,
    onConfirm: t,
    children: (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      children: o.intl.string(o.t.UyVVan)
    })
  })
}

function u(e) {
  let {
    onClose: t
  } = e;
  return (0, r.jsx)(a.MJ3, {
    dismissable: true,
    header: o.intl.string(o.t["8lQ2rR"]),
    confirmText: o.intl.string(o.t["8lQ2rR"]),
    cancelText: o.intl.string(o.t["ETE/oC"]),
    onCancel: t,
    onConfirm: () => (0, s.U_)("", true).then(t),
    children: (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      children: o.intl.string(o.t.FB4H1D)
    })
  })
}

function d(e) {
  let {
    onClose: t,
    errorMessage: n
  } = e;
  return (0, r.jsx)(a.MJ3, {
    dismissable: true,
    header: o.intl.string(o.t.LX0nT8),
    confirmText: o.intl.string(o.t.BddRzS),
    confirmButtonColor: i.XD.BRAND,
    onCancel: t,
    onConfirm: t,
    children: (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      children: n
    })
  })
}

function f(e) {
  let {
    shouldRenderOwnedTeamsModal: t,
    shouldRenderOwnedGuildsModal: n,
    shouldRenderDeleteAccountConfirmModal: i,
    shouldRenderDisableAccountErrorModal: a,
    disableAccountErrorMessage: s,
    onOwnedTeamsWarningModalClose: o,
    onOwnedGuildsWarningModalClose: f,
    onDeleteAccountConfirmModalClose: p,
    onDisableAccountErrorModalClose: _
  } = e;
  return t ? (0, r.jsx)(l, {
    onClose: o
  }) : n ? (0, r.jsx)(c, {
    onClose: f
  }) : i ? (0, r.jsx)(u, {
    onClose: p
  }) : a ? (0, r.jsx)(d, {
    onClose: _,
    errorMessage: s
  }) : null
}