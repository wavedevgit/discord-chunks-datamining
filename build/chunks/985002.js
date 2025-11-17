/** Chunk was on web.js **/
/** chunk id: 985002, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  G: () => l
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk881052 = require("./881052.js"),
  Chunk260722 = require("./260722.js"),
  Chunk914788 = require("./914788.js"),
  Chunk292352 = require("./292352.js");

function l(e) {
  let {
    onError: t,
    onSuccess: n
  } = null != e ? e : {}, [l, c] = r.useState(false), [u, d] = r.useState(false), [f, _] = r.useState(false), [p, h] = r.useState(false), [m, g] = r.useState(false), [E, b] = r.useState(false), [y, O] = r.useState(false), [v, I] = r.useState(false), T = l || u || f || p || E || v, S = r.useCallback(async e => {
    if (!T) {
      c(true);
      try {
        await (0, a.Yw)(e, s.ne.ACTIVE), null == n || n()
      } catch (n) {
        let e = new i.Hx(n);
        null == t || t(e)
      } finally {
        c(false)
      }
    }
  }, [T, t, n]), A = r.useCallback(async e => {
    if (!T) {
      d(true);
      try {
        await (0, a.Yw)(e, s.ne.DECLINED), null == n || n()
      } catch (n) {
        let e = new i.Hx(n);
        null == t || t(e)
      } finally {
        d(false)
      }
    }
  }, [T, t, n]), C = r.useCallback(async e => {
    if (!T) {
      _(true);
      try {
        await (0, a.Yw)(e, s.ne.INACTIVE), null == n || n()
      } catch (n) {
        let e = new i.Hx(n);
        null == t || t(e)
      } finally {
        _(false)
      }
    }
  }, [T, t, n]), N = r.useCallback(async e => {
    if (!T) {
      h(true);
      try {
        await (0, a.fc)(e), null == n || n()
      } catch (n) {
        let e = new i.Hx(n);
        null == t || t(e)
      } finally {
        h(false)
      }
    }
  }, [T, t, n]), R = r.useCallback(async () => {
    if (!m) {
      g(true);
      try {
        await (0, a.qd)(), null == n || n()
      } catch (n) {
        let e = new i.Hx(n);
        null == t || t(e)
      } finally {
        g(false)
      }
    }
  }, [m, t, n]), P = r.useCallback(async e => {
    if (!y) {
      O(true);
      try {
        await a.ZP.fetchTeenActivity(e), null == n || n()
      } catch (n) {
        let e = new i.Hx(n);
        null == t || t(e)
      } finally {
        O(false)
      }
    }
  }, [y, t, n]);
  return {
    acceptLinkRequest: S,
    declineLinkRequest: A,
    disconnectLinkRequest: C,
    cancelLinkRequest: N,
    selectTeenUser: P,
    getLinkCode: R,
    requestLink: r.useCallback(async (e, r) => {
      if (!E) {
        b(true);
        try {
          await a.ZP.requestLink(e, r), null == n || n()
        } catch (n) {
          let e = new i.Hx(n);
          null == t || t(e)
        } finally {
          b(false)
        }
      }
    }, [E, t, n]),
    loadMore: r.useCallback(async e => {
      let n = o.Z.getActionsForDisplayType(e),
        r = n[n.length - 1],
        s = o.Z.getStartId(),
        l = o.Z.getSelectedTeenId();
      if (!v && null != s && null != l) {
        I(true);
        try {
          await a.ZP.fetchMoreTeenActivity(l, e, s, r.event_id)
        } catch (n) {
          let e = new i.Hx(n);
          null == t || t(e)
        } finally {
          I(false)
        }
      }
    }, [v, t]),
    isAcceptLoading: l,
    isDeclineLoading: u,
    isDisconnectLoading: f,
    isCancelLoading: p,
    isGetLinkCodeLoading: m,
    isSelectTeenUserLoading: y,
    isRequestingLink: E,
    isMoreLoading: v
  }
}