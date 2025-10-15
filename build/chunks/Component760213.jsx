/** Chunk was on 55944 **/
/** chunk id: 760213, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => v,
  Z: () => I
}), require("./457542.js");
var s, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
  Chunk878709 = require("./878709.js"),
  v = ((s = {})[s.LOGIN_REQUIRED = 0] = "LOGIN_REQUIRED", s[s.SWITCHED = 1] = "SWITCHED", s[s.REMOVED = 2] = "REMOVED", s);

function j(e) {
  let {
    actionText: t,
    user: n,
    onAction: s
  } = e, {
    currentUser: i,
    hidePrivateData: r,
    isAuthenticated: T
  } = (0, c.cj)([f.default, _.Z, h.default], () => ({
    currentUser: f.default.getCurrentUser(),
    hidePrivateData: _.Z.hidePersonalInformation,
    isAuthenticated: h.default.isAuthenticated()
  })), v = new x.Z(n), j = T && (null == i ? true : i.id) === v.id, I = n.tokenStatus === N.q.INVALID, U = r || v.hasUniqueUsername() ? null : "#".concat(v.discriminator), M = null;
  return m.Z.useConfig({
    location: "Account card load"
  }), j ? M = (0, a.jsx)(o.Text, {
    variant: "text-sm/semibold",
    className: p.hintText,
    color: "text-feedback-positive",
    children: A.intl.string(A.t.seV8ys)
  }) : I && (M = (0, a.jsx)(o.Text, {
    variant: "text-sm/semibold",
    className: p.hintText,
    color: "text-danger",
    children: A.intl.string(A.t.tYX2pq)
  })), (0, a.jsx)("div", {
    className: p.accountCard,
    children: (0, a.jsxs)("div", {
      className: p.userDetails,
      children: [(0, a.jsx)(o.qEK, {
        src: v.getAvatarURL(true, 40),
        size: o.EFr.SIZE_40,
        "aria-label": n.username
      }), (0, a.jsxs)("div", {
        className: l()(p.usernameSection, {
          [p.hasActionMaxWidth]: !j
        }),
        children: [(0, a.jsxs)("div", {
          className: p.username,
          children: [(0, a.jsx)(o.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            lineClamp: 1,
            children: C.ZP.getUserTag(v, {
              mode: "username",
              identifiable: r ? "never" : "always"
            })
          }), (0, a.jsx)(o.Text, {
            color: "header-secondary",
            variant: "text-sm/normal",
            children: U
          })]
        }), M]
      }), (0, a.jsxs)("div", {
        className: p.userActions,
        children: [!j && (0, a.jsx)(o.Button, {
          variant: "secondary",
          text: I ? A.intl.string(A.t["DSN+h4"]) : t,
          onClick: function() {
            if (I) return void s(0, n.id);
            g.default.track(b.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
              location: {
                section: b.jXE.MANAGE_ACCOUNTS_MODAL
              }
            }), E.yD(n.id), s(1, n.id)
          }
        }), (0, a.jsx)(o.hU, {
          icon: o.xhG,
          onClick: function(e) {
            (0, u.vq)(e, e => {
              let {
                onSelect: t
              } = e;
              return (0, a.jsx)(o.v2r, {
                "aria-label": A.intl.string(A.t["41qiDQ"]),
                navId: "manage-multi-account",
                onClose: u.Zy,
                onSelect: t,
                children: (0, a.jsx)(o.sNh, {
                  id: "remove-account",
                  label: A.intl.string(A.t.lSLMaW),
                  action: () => {
                    d.Z.logout("multi_accounts_list", null, n.id).finally(() => {
                      E.Zd(n.id)
                    });
                    let e = {};
                    null != i ? e.section = b.jXE.MANAGE_ACCOUNTS_MODAL : e.page = b.Usc.LOGIN, g.default.track(b.rMx.MULTI_ACCOUNT_ACCOUNT_REMOVE, {
                      location: e
                    }), s(2, n.id), null != t && t()
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

function I(e) {
  let {
    actionText: t,
    onAction: n
  } = e, {
    isLoading: s,
    multiAccountUsers: r
  } = (0, T.L)();
  return (0, a.jsx)("div", {
    className: p.list,
    children: s ? (0, a.jsx)(o.$jN, {
      className: p.spinner
    }) : r.map((e, s) => (0, a.jsxs)(i.Fragment, {
      children: [(0, a.jsx)(j, {
        user: e,
        actionText: t,
        onAction: n
      }, e.id), r.length - 1 !== s && (0, a.jsx)("div", {
        role: "separator",
        className: p.separator
      })]
    }, e.id))
  })
}