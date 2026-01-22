/** Chunk was on 86142 **/
/** chunk id: 970573, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => O,
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

function N(e) {
  let {
    actionText: t,
    user: n,
    onAction: r
  } = e, {
    currentUser: s,
    hidePrivateData: l,
    isAuthenticated: b
  } = (0, o.cf)([m.default, g.A, p.default], () => ({
    currentUser: m.default.getCurrentUser(),
    hidePrivateData: g.A.hidePersonalInformation,
    isAuthenticated: p.default.isAuthenticated()
  })), S = new f.A(n), N = b && (null == s ? true : s.id) === S.id, O = n.tokenStatus === E.U.INVALID, I = l || S.hasUniqueUsername() ? null : "#".concat(S.discriminator), T = null;
  return h.A.useConfig({
    location: "Account card load"
  }), N ? T = (0, i.jsx)(c.Text, {
    variant: "text-sm/semibold",
    className: y.dx,
    color: "text-feedback-positive",
    children: j.intl.string(j.t.seV8yt)
  }) : O && (T = (0, i.jsx)(c.Text, {
    variant: "text-sm/semibold",
    className: y.dx,
    color: "text-feedback-critical",
    children: j.intl.string(j.t.tYX2ps)
  })), (0, i.jsx)("div", {
    className: y.KJ,
    children: (0, i.jsxs)("div", {
      className: y.yS,
      children: [(0, i.jsx)(c.euF, {
        src: S.getAvatarURL(true, 40),
        size: c._3J.SIZE_40,
        "aria-label": n.username
      }), (0, i.jsxs)("div", {
        className: a()(y.K_, {
          [y.zU]: !N
        }),
        children: [(0, i.jsxs)("div", {
          className: y.Xh,
          children: [(0, i.jsx)(c.Text, {
            variant: "text-md/semibold",
            color: "text-strong",
            lineClamp: 1,
            children: x.Ay.getUserTag(S, {
              mode: "username",
              identifiable: l ? "never" : "always"
            })
          }), (0, i.jsx)(c.Text, {
            color: "text-default",
            variant: "text-sm/normal",
            children: I
          })]
        }), T]
      }), (0, i.jsxs)("div", {
        className: y.Xp,
        children: [!N && (0, i.jsx)(c.Button, {
          variant: "secondary",
          text: O ? j.intl.string(j.t["DSN+hw"]) : t,
          onClick: function() {
            O ? r(0, n.id) : (A.default.track(v.HAw.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
              location: {
                section: v.JJy.MANAGE_ACCOUNTS_MODAL
              }
            }), _.Mx(n.id), r(1, n.id))
          }
        }), (0, i.jsx)(c.K0, {
          icon: c.jNK,
          onClick: function(e) {
            (0, d.jA)(e, e => {
              let {
                onSelect: t
              } = e;
              return (0, i.jsx)(c.W1t, {
                "aria-label": j.intl.string(j.t["41qiDU"]),
                navId: "manage-multi-account",
                onClose: d.Z_,
                onSelect: t,
                children: (0, i.jsx)(c.Drp, {
                  id: "remove-account",
                  label: j.intl.string(j.t.lSLMaU),
                  action: () => {
                    let e;
                    u.A.logout("multi_accounts_list", null, n.id).finally(() => {
                      _.At(n.id)
                    }), e = {}, null != s ? e.section = v.JJy.MANAGE_ACCOUNTS_MODAL : e.page = v.S3d.LOGIN, A.default.track(v.HAw.MULTI_ACCOUNT_ACCOUNT_REMOVE, {
                      location: e
                    }), r(2, n.id), null != t && t()
                  },
                  color: "danger"
                })
              })
            })
          },
          "aria-label": j.intl.string(j.t.PdRCRg),
          variant: "icon-only"
        })]
      })]
    })
  })
}

function O(e) {
  let {
    actionText: t,
    onAction: n
  } = e, {
    isLoading: r,
    multiAccountUsers: l
  } = (0, b.K)();
  return (0, i.jsx)("div", {
    className: y.p_,
    children: r ? (0, i.jsx)(c.y$y, {
      className: y.u1
    }) : l.map((e, r) => (0, i.jsxs)(s.Fragment, {
      children: [(0, i.jsx)(N, {
        user: e,
        actionText: t,
        onAction: n
      }, e.id), l.length - 1 !== r && (0, i.jsx)("div", {
        role: "separator",
        className: y.me
      })]
    }, e.id))
  })
}