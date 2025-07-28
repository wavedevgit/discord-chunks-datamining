/** Chunk was on 55944 **/
s.d(t, {
  W: () => p,
  Z: () => j
}), s(457542);
var n, i = s(255367),
  a = s(73800),
  r = s(120356),
  l = s.n(r),
  c = s(442837),
  o = s(481060),
  d = s(893776),
  u = s(239091),
  m = s(598077),
  x = s(314897),
  h = s(246946),
  _ = s(594174),
  f = s(626135),
  g = s(51144),
  N = s(480387),
  v = s(726745),
  T = s(251423),
  A = s(981631),
  C = s(388032),
  E = s(576052),
  p = ((n = {})[n.LOGIN_REQUIRED = 0] = "LOGIN_REQUIRED", n[n.SWITCHED = 1] = "SWITCHED", n[n.REMOVED = 2] = "REMOVED", n);

function b(e) {
  let {
    actionText: t,
    user: s,
    onAction: n
  } = e, {
    currentUser: a,
    hidePrivateData: r,
    isAuthenticated: T
  } = (0, c.cj)([_.default, h.Z, x.default], () => ({
    currentUser: _.default.getCurrentUser(),
    hidePrivateData: h.Z.hidePersonalInformation,
    isAuthenticated: x.default.isAuthenticated()
  })), p = new m.Z(s), b = T && (null == a ? void 0 : a.id) === p.id, j = s.tokenStatus === v.q.INVALID, I = r || p.hasUniqueUsername() ? null : "#".concat(p.discriminator), U = null;
  return b ? U = (0, i.jsx)(o.Text, {
    variant: "text-sm/semibold",
    className: E.hintText,
    color: "text-feedback-positive",
    children: C.intl.string(C.t.seV8ys)
  }) : j && (U = (0, i.jsx)(o.Text, {
    variant: "text-sm/semibold",
    className: E.hintText,
    color: "text-danger",
    children: C.intl.string(C.t.tYX2pq)
  })), (0, i.jsx)("div", {
    className: E.accountCard,
    children: (0, i.jsxs)("div", {
      className: E.userDetails,
      children: [(0, i.jsx)(o.qEK, {
        src: p.getAvatarURL(void 0, 40),
        size: o.EFr.SIZE_40,
        "aria-label": s.username
      }), (0, i.jsxs)("div", {
        className: l()(E.usernameSection, {
          [E.hasActionMaxWidth]: !b
        }),
        children: [(0, i.jsxs)("div", {
          className: E.username,
          children: [(0, i.jsx)(o.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            className: E.textOverflow,
            children: g.ZP.getUserTag(p, {
              mode: "username",
              identifiable: r ? "never" : "always"
            })
          }), (0, i.jsx)(o.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: I
          })]
        }), U]
      }), (0, i.jsxs)("div", {
        className: E.userActions,
        children: [!b && (0, i.jsx)(o.zxk, {
          variant: "secondary",
          text: j ? C.intl.string(C.t["DSN+h4"]) : t,
          onClick: function() {
            if (j) return void n(0, s.id);
            f.default.track(A.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
              location: {
                section: A.jXE.MANAGE_ACCOUNTS_MODAL
              }
            }), N.yD(s.id), n(1, s.id)
          }
        }), (0, i.jsx)(o.hU, {
          icon: o.xhG,
          onClick: function(e) {
            (0, u.vq)(e, e => {
              let {
                onSelect: t
              } = e;
              return (0, i.jsx)(o.v2r, {
                "aria-label": C.intl.string(C.t["41qiDQ"]),
                navId: "manage-multi-account",
                onClose: u.Zy,
                onSelect: t,
                children: (0, i.jsx)(o.sNh, {
                  id: "remove-account",
                  label: C.intl.string(C.t.lSLMaW),
                  action: () => {
                    d.Z.logout("multi_accounts_list", null, s.id).finally(() => {
                      N.Zd(s.id)
                    });
                    let e = {};
                    null != a ? e.section = A.jXE.MANAGE_ACCOUNTS_MODAL : e.page = A.Usc.LOGIN, f.default.track(A.rMx.MULTI_ACCOUNT_ACCOUNT_REMOVE, {
                      location: e
                    }), n(2, s.id), null != t && t()
                  },
                  color: "danger"
                })
              })
            })
          },
          "aria-label": C.intl.string(C.t.PdRCRk),
          variant: "icon-only"
        })]
      })]
    })
  })
}

function j(e) {
  let {
    actionText: t,
    onAction: s
  } = e, {
    isLoading: n,
    multiAccountUsers: r
  } = (0, T.L)();
  return (0, i.jsx)("div", {
    className: E.list,
    children: n ? (0, i.jsx)(o.$jN, {
      className: E.spinner
    }) : r.map((e, n) => (0, i.jsxs)(a.Fragment, {
      children: [(0, i.jsx)(b, {
        user: e,
        actionText: t,
        onAction: s
      }, e.id), r.length - 1 !== n && (0, i.jsx)("div", {
        role: "separator",
        className: E.separator
      })]
    }, e.id))
  })
}