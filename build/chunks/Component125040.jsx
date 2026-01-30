/** Chunk was on 78376 **/
/** chunk id: 125040, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk631670 = require("./631670.js"),
  Chunk985018 = require("./985018.jsx");

function o(e) {
  let {
    onClose: t
  } = e;
  return (0, r.jsx)(l.MJ3, {
    dismissable: true,
    header: a.intl.string(a.t.UNGZDI),
    confirmText: a.intl.string(a.t.BddRzS),
    confirmButtonColor: i.XD.BRAND,
    onCancel: t,
    onConfirm: t,
    children: (0, r.jsx)(l.Text, {
      variant: "text-md/normal",
      children: a.intl.string(a.t.alpAUm)
    })
  })
}

function c(e) {
  let {
    onClose: t
  } = e;
  return (0, r.jsx)(l.MJ3, {
    dismissable: true,
    header: a.intl.string(a.t.I5UrbV),
    confirmText: a.intl.string(a.t.BddRzS),
    confirmButtonColor: i.XD.BRAND,
    onCancel: t,
    onConfirm: t,
    children: (0, r.jsx)(l.Text, {
      variant: "text-md/normal",
      children: a.intl.string(a.t.UyVVan)
    })
  })
}

function d(e) {
  let {
    onClose: t
  } = e;
  return (0, r.jsx)(l.MJ3, {
    dismissable: true,
    header: a.intl.string(a.t["8lQ2rR"]),
    confirmText: a.intl.string(a.t["8lQ2rR"]),
    cancelText: a.intl.string(a.t["ETE/oC"]),
    onCancel: t,
    onConfirm: () => (0, s.U_)("", true).then(t),
    children: (0, r.jsx)(l.Text, {
      variant: "text-md/normal",
      children: a.intl.string(a.t.FB4H1D)
    })
  })
}

function u(e) {
  let {
    onClose: t,
    errorMessage: n
  } = e;
  return (0, r.jsx)(l.MJ3, {
    dismissable: true,
    header: a.intl.string(a.t.LX0nT8),
    confirmText: a.intl.string(a.t.BddRzS),
    confirmButtonColor: i.XD.BRAND,
    onCancel: t,
    onConfirm: t,
    children: (0, r.jsx)(l.Text, {
      variant: "text-md/normal",
      children: n
    })
  })
}

function _(e) {
  let {
    shouldRenderOwnedTeamsModal: t,
    shouldRenderOwnedGuildsModal: n,
    shouldRenderDeleteAccountConfirmModal: i,
    shouldRenderDisableAccountErrorModal: l,
    disableAccountErrorMessage: s,
    onOwnedTeamsWarningModalClose: a,
    onOwnedGuildsWarningModalClose: _,
    onDeleteAccountConfirmModalClose: p,
    onDisableAccountErrorModalClose: m
  } = e;
  return t ? (0, r.jsx)(o, {
    onClose: a
  }) : n ? (0, r.jsx)(c, {
    onClose: _
  }) : i ? (0, r.jsx)(d, {
    onClose: p
  }) : l ? (0, r.jsx)(u, {
    onClose: m,
    errorMessage: s
  }) : null
}