/** Chunk was on web.js **/
/** chunk id: 288260, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk809206 = require("./809206.js"),
  Chunk388032 = require("./388032.jsx");

function l(e) {
  let {
    onClose: t
  } = e;
  return (0, r.jsx)(a.SR, {
    dismissable: true,
    header: s.intl.string(s.t.UNGZDI),
    confirmText: s.intl.string(s.t.BddRzS),
    confirmButtonColor: i.Tt.BRAND,
    onCancel: t,
    onConfirm: t,
    children: (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      children: s.intl.string(s.t.alpAUm)
    })
  })
}

function c(e) {
  let {
    onClose: t
  } = e;
  return (0, r.jsx)(a.SR, {
    dismissable: true,
    header: s.intl.string(s.t.I5UrbV),
    confirmText: s.intl.string(s.t.BddRzS),
    confirmButtonColor: i.Tt.BRAND,
    onCancel: t,
    onConfirm: t,
    children: (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      children: s.intl.string(s.t.UyVVan)
    })
  })
}

function u(e) {
  let {
    onClose: t
  } = e;
  return (0, r.jsx)(a.SR, {
    dismissable: true,
    header: s.intl.string(s.t["8lQ2rR"]),
    confirmText: s.intl.string(s.t["8lQ2rR"]),
    cancelText: s.intl.string(s.t["ETE/oC"]),
    onCancel: t,
    onConfirm: () => (0, o.ss)("", true).then(t),
    children: (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      children: s.intl.string(s.t.FB4H1D)
    })
  })
}

function d(e) {
  let {
    onClose: t,
    errorMessage: n
  } = e;
  return (0, r.jsx)(a.SR, {
    dismissable: true,
    header: s.intl.string(s.t.LX0nT8),
    confirmText: s.intl.string(s.t.BddRzS),
    confirmButtonColor: i.Tt.BRAND,
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
    disableAccountErrorMessage: o,
    onOwnedTeamsWarningModalClose: s,
    onOwnedGuildsWarningModalClose: f,
    onDeleteAccountConfirmModalClose: p,
    onDisableAccountErrorModalClose: _
  } = e;
  return t ? (0, r.jsx)(l, {
    onClose: s
  }) : n ? (0, r.jsx)(c, {
    onClose: f
  }) : i ? (0, r.jsx)(u, {
    onClose: p
  }) : a ? (0, r.jsx)(d, {
    onClose: _,
    errorMessage: o
  }) : null
}