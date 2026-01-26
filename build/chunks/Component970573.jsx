/** Chunk was on 86142 **/
/** chunk id: 970573, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => N,
  X: () => S
}), require("./492834.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk830215 = require("./830215.js"),
  Chunk442433 = require("./442433.js"),
  Chunk30058 = require("./30058.js"),
  Chunk427157 = require("./427157.js"),
  Chunk961350 = require("./961350.js"),
  Chunk351906 = require("./351906.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk427262 = require("./427262.js"),
  Chunk429707 = require("./429707.js"),
  Chunk274303 = require("./274303.js"),
  Chunk994125 = require("./994125.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk364877 = require("./364877.js"),
  S = ((r = {})[r.LOGIN_REQUIRED = 0] = "LOGIN_REQUIRED", r[r.SWITCHED = 1] = "SWITCHED", r[r.REMOVED = 2] = "REMOVED", r);

function I(e) {
  let {
    actionText: t,
    user: n,
    onAction: r
  } = e, {
    currentUser: s,
    hidePrivateData: l,
    isAuthenticated: v
  } = (0, o.cf)([f.default, m.A, g.default], () => ({
    currentUser: f.default.getCurrentUser(),
    hidePrivateData: m.A.hidePersonalInformation,
    isAuthenticated: g.default.isAuthenticated()
  })), S = new p.A(n), I = v && (null == s ? true : s.id) === S.id, N = n.tokenStatus === E.U.INVALID, O = l || S.hasUniqueUsername() ? null : "#".concat(S.discriminator), C = null;
  return h.A.useConfig({
    location: "Account card load"
  }), I ? C = (0, i.jsx)(c.Text, {
    variant: "text-sm/semibold",
    className: b.dx,
    color: "text-feedback-positive",
    children: y.intl.string(y.t.seV8yt)
  }) : N && (C = (0, i.jsx)(c.Text, {
    variant: "text-sm/semibold",
    className: b.dx,
    color: "text-feedback-critical",
    children: y.intl.string(y.t.tYX2ps)
  })), (0, i.jsx)("div", {
    className: b.KJ,
    children: (0, i.jsxs)("div", {
      className: b.yS,
      children: [(0, i.jsx)(c.euF, {
        src: S.getAvatarURL(true, 40),
        size: c._3J.SIZE_40,
        "aria-label": n.username
      }), (0, i.jsxs)("div", {
        className: a()(b.K_, {
          [b.zU]: !I
        }),
        children: [(0, i.jsxs)("div", {
          className: b.Xh,
          children: [(0, i.jsx)(c.Text, {
            variant: "text-md/semibold",
            color: "text-strong",
            lineClamp: 1,
            children: A.Ay.getUserTag(S, {
              mode: "username",
              identifiable: l ? "never" : "always"
            })
          }), (0, i.jsx)(c.Text, {
            color: "text-default",
            variant: "text-sm/normal",
            children: O
          })]
        }), C]
      }), (0, i.jsxs)("div", {
        className: b.Xp,
        children: [!I && (0, i.jsx)(c.Button, {
          variant: "secondary",
          text: N ? y.intl.string(y.t["DSN+hw"]) : t,
          onClick: function() {
            N ? r(0, n.id) : (_.default.track(j.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
              location: {
                section: j.JJy.MANAGE_ACCOUNTS_MODAL
              }
            }), x.Mx(n.id), r(1, n.id))
          }
        }), (0, i.jsx)(c.K0, {
          icon: c.jNK,
          onClick: function(e) {
            (0, d.jA)(e, e => {
              let {
                onSelect: t
              } = e;
              return (0, i.jsx)(c.W1t, {
                "data-menu-migrated-auto": true,
                "aria-label": y.intl.string(y.t["41qiDU"]),
                navId: "manage-multi-account",
                onClose: d.Z_,
                onSelect: t,
                children: (0, i.jsx)(c.Drp, {
                  id: "remove-account",
                  label: y.intl.string(y.t.lSLMaU),
                  action: () => {
                    let e;
                    u.A.logout("multi_accounts_list", null, n.id).finally(() => {
                      x.At(n.id)
                    }), e = {}, null != s ? e.section = j.JJy.MANAGE_ACCOUNTS_MODAL : e.page = j.S3d.LOGIN, _.default.track(j.HAw.MULTI_ACCOUNT_ACCOUNT_REMOVE, {
                      location: e
                    }), r(2, n.id), null != t && t()
                  },
                  color: "danger"
                })
              })
            })
          },
          "aria-label": y.intl.string(y.t.PdRCRg),
          variant: "icon-only"
        })]
      })]
    })
  })
}

function N(e) {
  let {
    actionText: t,
    onAction: n
  } = e, {
    isLoading: r,
    multiAccountUsers: l
  } = (0, v.K)();
  return (0, i.jsx)("div", {
    className: b.p_,
    children: r ? (0, i.jsx)(c.y$y, {
      className: b.u1
    }) : l.map((e, r) => (0, i.jsxs)(s.Fragment, {
      children: [(0, i.jsx)(I, {
        user: e,
        actionText: t,
        onAction: n
      }, e.id), l.length - 1 !== r && (0, i.jsx)("div", {
        role: "separator",
        className: b.me
      })]
    }, e.id))
  })
}