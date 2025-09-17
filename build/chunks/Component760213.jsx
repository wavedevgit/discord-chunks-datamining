/** Chunk was on 55944 **/
/** chunk id: 760213, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  W: () => v,
  Z: () => b
}), require("./457542.js");
var n, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk239091 = require("./239091.js"),
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
  Chunk214796 = require("./214796.js"),
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
  })), v = new m.Z(s), j = C && (null == a ? true : a.id) === v.id, b = s.tokenStatus === T.q.INVALID, I = r || v.hasUniqueUsername() ? null : "#".concat(v.discriminator), U = null;
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
        src: v.getAvatarURL(true, 40),
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