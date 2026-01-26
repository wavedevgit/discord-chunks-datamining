/** Chunk was on 35894 **/
/** chunk id: 856768, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk827734 = require("./827734.js"),
  Chunk73939 = require("./73939.js"),
  Chunk36525 = require("./36525.jsx"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk686956 = require("./686956.js"),
  Chunk58149 = require("./58149.js"),
  Chunk961350 = require("./961350.js"),
  Chunk954571 = require("./954571.js"),
  Chunk504049 = require("./504049.js"),
  Chunk134413 = require("./134413.js"),
  Chunk225671 = require("./225671.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk678554 = require("./678554.js");

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e) {
  let {
    guildId: t
  } = e, O = (0, f.vA)(t), {
    selectedUserIds: v,
    clearSelection: _
  } = (0, b.A)(t), H = v.size > 0, w = async (e, t, n, r) => {
    try {
      let l = await u.A.banMultipleUsers(e, t, n, r);
      (0, c.showToast)((0, c.createToast)(g.intl.string(g.t.AsCe5I), c.ToastType.SUCCESS)), m.default.track(j.HAw.BULK_MODERATION_ACTION_COMPLETED, y(x({}, (0, d.H$)(e)), {
        action_type: p.Nj.BAN,
        target_user_ids: [...v],
        mod_user_id: C.default.getId(),
        successful_user_ids: l.body.banned_users,
        location
      }))
    } catch (e) {
      (0, c.showToast)((0, c.createToast)(g.intl.string(g.t.mICAWY), c.ToastType.FAILURE))
    }
    _()
  }, A = l.useCallback(() => {
    _()
  }, [_]), S = (0, r.jsxs)("span", {
    className: h.zC,
    children: [(0, r.jsx)(c.nys, {
      size: "custom",
      width: 24,
      height: 24,
      color: (0, c.rdh)(i.A.unsafe_rawColors.PRIMARY_500).hex()
    }), (0, r.jsx)(c.Text, {
      variant: "heading-md/bold",
      color: "text-default",
      children: g.intl.format(g.t.TstoSZ, {
        count: v.size
      })
    }), (0, r.jsx)(c.QWc, {
      text: g.intl.string(g.t.yW6ZdE),
      onClick: A
    })]
  }), D = (0, r.jsxs)("span", {
    className: h.UD,
    children: [(0, r.jsx)(c.wI0, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20
    }), (0, r.jsx)(c.Text, {
      variant: "text-sm/semibold",
      color: "currentColor",
      children: g.intl.string(g.t["2a50fF"])
    })]
  });
  return O ? (0, r.jsx)(o.F, {
    component: "div",
    className: h.n2,
    children: H && (0, r.jsx)(c.FQk, {
      children: (0, r.jsx)(a.A, {
        onSave: () => {
          m.default.track(j.HAw.BULK_MODERATION_ACTION_STARTED, y(x({}, (0, d.H$)(t)), {
            action_type: p.Nj.BAN,
            target_user_ids: [...v],
            mod_user_id: C.default.getId(),
            location
          })), (0, c.mMO)(async () => {
            let {
              default: e
            } = await n.e("2504").then(n.bind(n, 333179));
            return n => (0, r.jsx)(e, y(x({}, n), {
              guildId: t,
              canBulkBan: O,
              userIds: v,
              onBanMultiple: w
            }))
          })
        },
        onSaveText: D,
        onSaveButtonColor: s.XD.RED,
        message: S
      })
    })
  }) : null
}