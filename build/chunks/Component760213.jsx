/** Chunk was on 55944 **/
/** chunk id: 760213, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => p,
  Z: () => U
}), require("./457542.js");
var s, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk239091 = require("./239091.js"),
  Chunk623602 = require("./623602.js"),
  Chunk598077 = require("./598077.js"),
  Chunk314897 = require("./314897.js"),
  Chunk246946 = require("./246946.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk51144 = require("./51144.js"),
  Chunk480387 = require("./480387.js"),
  Chunk726745 = require("./726745.js"),
  Chunk251423 = require("./251423.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk805079 = require("./805079.js"),
  p = ((s = {})[s.LOGIN_REQUIRED = 0] = "LOGIN_REQUIRED", s[s.SWITCHED = 1] = "SWITCHED", s[s.REMOVED = 2] = "REMOVED", s);

function j(e) {
  let {
    actionText: t,
    user: n,
    onAction: s
  } = e, {
    currentUser: a,
    hidePrivateData: l,
    isAuthenticated: N
  } = (0, c.cj)([b.default, h.Z, f.default], () => ({
    currentUser: b.default.getCurrentUser(),
    hidePrivateData: h.Z.hidePersonalInformation,
    isAuthenticated: f.default.isAuthenticated()
  })), p = new x.Z(n), j = N && (null == a ? true : a.id) === p.id, U = n.tokenStatus === E.q.INVALID, I = l || p.hasUniqueUsername() ? null : "#".concat(p.discriminator), M = null;
  return m.Z.useConfig({
    location: "Account card load"
  }), j ? M = (0, i.jsx)(o.Text, {
    variant: "text-sm/semibold",
    className: v.hintText,
    color: "text-feedback-positive",
    children: A.intl.string(A.t.seV8yt)
  }) : U && (M = (0, i.jsx)(o.Text, {
    variant: "text-sm/semibold",
    className: v.hintText,
    color: "text-feedback-critical",
    children: A.intl.string(A.t.tYX2ps)
  })), (0, i.jsx)("div", {
    className: v.accountCard,
    children: (0, i.jsxs)("div", {
      className: v.userDetails,
      children: [(0, i.jsx)(o.qEK, {
        src: p.getAvatarURL(true, 40),
        size: o.EFr.SIZE_40,
        "aria-label": n.username
      }), (0, i.jsxs)("div", {
        className: r()(v.usernameSection, {
          [v.hasActionMaxWidth]: !j
        }),
        children: [(0, i.jsxs)("div", {
          className: v.username,
          children: [(0, i.jsx)(o.Text, {
            variant: "text-md/semibold",
            color: "text-strong",
            lineClamp: 1,
            children: C.ZP.getUserTag(p, {
              mode: "username",
              identifiable: l ? "never" : "always"
            })
          }), (0, i.jsx)(o.Text, {
            color: "text-default",
            variant: "text-sm/normal",
            children: I
          })]
        }), M]
      }), (0, i.jsxs)("div", {
        className: v.userActions,
        children: [!j && (0, i.jsx)(o.Button, {
          variant: "secondary",
          text: U ? A.intl.string(A.t["DSN+hw"]) : t,
          onClick: function() {
            if (U) return void s(0, n.id);
            g.default.track(_.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
              location: {
                section: _.jXE.MANAGE_ACCOUNTS_MODAL
              }
            }), T.yD(n.id), s(1, n.id)
          }
        }), (0, i.jsx)(o.hU, {
          icon: o.xhG,
          onClick: function(e) {
            (0, u.vq)(e, e => {
              let {
                onSelect: t
              } = e;
              return (0, i.jsx)(o.v2r, {
                "aria-label": A.intl.string(A.t["41qiDU"]),
                navId: "manage-multi-account",
                onClose: u.Zy,
                onSelect: t,
                children: (0, i.jsx)(o.sNh, {
                  id: "remove-account",
                  label: A.intl.string(A.t.lSLMaU),
                  action: () => {
                    d.Z.logout("multi_accounts_list", null, n.id).finally(() => {
                      T.Zd(n.id)
                    });
                    let e = {};
                    null != a ? e.section = _.jXE.MANAGE_ACCOUNTS_MODAL : e.page = _.Usc.LOGIN, g.default.track(_.rMx.MULTI_ACCOUNT_ACCOUNT_REMOVE, {
                      location: e
                    }), s(2, n.id), null != t && t()
                  },
                  color: "danger"
                })
              })
            })
          },
          "aria-label": A.intl.string(A.t.PdRCRg),
          variant: "icon-only"
        })]
      })]
    })
  })
}

function U(e) {
  let {
    actionText: t,
    onAction: n
  } = e, {
    isLoading: s,
    multiAccountUsers: l
  } = (0, N.L)();
  return (0, i.jsx)("div", {
    className: v.list,
    children: s ? (0, i.jsx)(o.$jN, {
      className: v.spinner
    }) : l.map((e, s) => (0, i.jsxs)(a.Fragment, {
      children: [(0, i.jsx)(j, {
        user: e,
        actionText: t,
        onAction: n
      }, e.id), l.length - 1 !== s && (0, i.jsx)("div", {
        role: "separator",
        className: v.separator
      })]
    }, e.id))
  })
}