/** Chunk was on 55944 **/
s.d(t, {
  W: () => v,
  Z: () => b
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
  T = s(726745),
  C = s(251423),
  p = s(981631),
  A = s(388032),
  E = s(576052),
  v = ((n = {})[n.LOGIN_REQUIRED = 0] = "LOGIN_REQUIRED", n[n.SWITCHED = 1] = "SWITCHED", n[n.REMOVED = 2] = "REMOVED", n);

function j(e) {
  let {
    actionText: t,
    user: s,
    onAction: n
  } = e, {
    currentUser: a,
    hidePrivateData: r,
    isAuthenticated: C
  } = (0, c.cj)([_.default, h.Z, x.default], () => ({
    currentUser: _.default.getCurrentUser(),
    hidePrivateData: h.Z.hidePersonalInformation,
    isAuthenticated: x.default.isAuthenticated()
  })), v = new m.Z(s), j = C && (null == a ? void 0 : a.id) === v.id, b = s.tokenStatus === T.q.INVALID, I = r || v.hasUniqueUsername() ? null : "#".concat(v.discriminator), U = null;
  return j ? U = (0, i.jsx)(o.Text, {
    variant: "text-sm/semibold",
    className: E.hintText,
    color: "text-feedback-positive",
    children: A.intl.string(A.t.seV8ys)
  }) : b && (U = (0, i.jsx)(o.Text, {
    variant: "text-sm/semibold",
    className: E.hintText,
    color: "text-danger",
    children: A.intl.string(A.t.tYX2pq)
  })), (0, i.jsx)("div", {
    className: E.accountCard,
    children: (0, i.jsxs)("div", {
      className: E.userDetails,
      children: [(0, i.jsx)(o.qEK, {
        src: v.getAvatarURL(void 0, 40),
        size: o.EFr.SIZE_40,
        "aria-label": s.username
      }), (0, i.jsxs)("div", {
        className: l()(E.usernameSection, {
          [E.hasActionMaxWidth]: !j
        }),
        children: [(0, i.jsxs)("div", {
          className: E.username,
          children: [(0, i.jsx)(o.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            lineClamp: 1,
            children: g.ZP.getUserTag(v, {
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
        children: [!j && (0, i.jsx)(o.zxk, {
          variant: "secondary",
          text: b ? A.intl.string(A.t["DSN+h4"]) : t,
          onClick: function() {
            if (b) return void n(0, s.id);
            f.default.track(p.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
              location: {
                section: p.jXE.MANAGE_ACCOUNTS_MODAL
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
                "aria-label": A.intl.string(A.t["41qiDQ"]),
                navId: "manage-multi-account",
                onClose: u.Zy,
                onSelect: t,
                children: (0, i.jsx)(o.sNh, {
                  id: "remove-account",
                  label: A.intl.string(A.t.lSLMaW),
                  action: () => {
                    d.Z.logout("multi_accounts_list", null, s.id).finally(() => {
                      N.Zd(s.id)
                    });
                    let e = {};
                    null != a ? e.section = p.jXE.MANAGE_ACCOUNTS_MODAL : e.page = p.Usc.LOGIN, f.default.track(p.rMx.MULTI_ACCOUNT_ACCOUNT_REMOVE, {
                      location: e
                    }), n(2, s.id), null != t && t()
                  },
                  color: "danger"
                })
              })
            })
          },
          "aria-label": A.intl.string(A.t.PdRCRk),
          variant: "icon-only"
        })]
      })]
    })
  })
}

function b(e) {
  let {
    actionText: t,
    onAction: s
  } = e, {
    isLoading: n,
    multiAccountUsers: r
  } = (0, C.L)();
  return (0, i.jsx)("div", {
    className: E.list,
    children: n ? (0, i.jsx)(o.$jN, {
      className: E.spinner
    }) : r.map((e, n) => (0, i.jsxs)(a.Fragment, {
      children: [(0, i.jsx)(j, {
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