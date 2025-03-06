/** Chunk was on 51724 **/
n.d(t, {
  G: () => o
}), n(47120);
var r = n(192379),
  i = n(881052),
  s = n(260722),
  a = n(914788),
  l = n(292352);

function o(e) {
  let {
    onError: t,
    onSuccess: n
  } = null != e ? e : {}, [o, c] = r.useState(!1), [d, u] = r.useState(!1), [m, p] = r.useState(!1), [g, h] = r.useState(!1), [f, x] = r.useState(!1), [b, N] = r.useState(!1), [_, E] = r.useState(!1), [j, C] = r.useState(!1), O = o || d || m || g || b || j, v = r.useCallback(async e => {
    if (!O) {
      c(!0);
      try {
        await (0, s.Yw)(e.id, l.ne.ACTIVE), null == n || n()
      } catch (n) {
        let e = new i.Hx(n);
        null == t || t(e)
      } finally {
        c(!1)
      }
    }
  }, [O, t, n]), S = r.useCallback(async e => {
    if (!O) {
      u(!0);
      try {
        await (0, s.Yw)(e.id, l.ne.DECLINED), null == n || n()
      } catch (n) {
        let e = new i.Hx(n);
        null == t || t(e)
      } finally {
        u(!1)
      }
    }
  }, [O, t, n]), T = r.useCallback(async e => {
    if (!O) {
      p(!0);
      try {
        await (0, s.Yw)(e.id, l.ne.INACTIVE), null == n || n()
      } catch (n) {
        let e = new i.Hx(n);
        null == t || t(e)
      } finally {
        p(!1)
      }
    }
  }, [O, t, n]), I = r.useCallback(async e => {
    if (!O) {
      h(!0);
      try {
        await (0, s.fc)(e.id), null == n || n()
      } catch (n) {
        let e = new i.Hx(n);
        null == t || t(e)
      } finally {
        h(!1)
      }
    }
  }, [O, t, n]), y = r.useCallback(async () => {
    if (!f) {
      x(!0);
      try {
        await (0, s.qd)(), null == n || n()
      } catch (n) {
        let e = new i.Hx(n);
        null == t || t(e)
      } finally {
        x(!1)
      }
    }
  }, [f, t, n]), A = r.useCallback(async e => {
    if (!_) {
      E(!0);
      try {
        await s.ZP.fetchTeenActivity(e), null == n || n()
      } catch (n) {
        let e = new i.Hx(n);
        null == t || t(e)
      } finally {
        E(!1)
      }
    }
  }, [_, t, n]);
  return {
    acceptLinkRequest: v,
    declineLinkRequest: S,
    disconnectLinkRequest: T,
    cancelLinkRequest: I,
    selectTeenUser: A,
    getLinkCode: y,
    requestLink: r.useCallback(async (e, r) => {
      if (!b) {
        N(!0);
        try {
          await s.ZP.requestLink(e, r), null == n || n()
        } catch (n) {
          let e = new i.Hx(n);
          null == t || t(e)
        } finally {
          N(!1)
        }
      }
    }, [b, t, n]),
    loadMore: r.useCallback(async e => {
      let n = a.Z.getActionsForDisplayType(e),
        r = n[n.length - 1],
        l = a.Z.getStartId(),
        o = a.Z.getSelectedTeenId();
      if (!j && null != l && null != o) {
        C(!0);
        try {
          await s.ZP.fetchMoreTeenActivity(o, e, l, r.event_id)
        } catch (n) {
          let e = new i.Hx(n);
          null == t || t(e)
        } finally {
          C(!1)
        }
      }
    }, [j, t]),
    isAcceptLoading: o,
    isDeclineLoading: d,
    isDisconnectLoading: m,
    isCancelLoading: g,
    isGetLinkCodeLoading: f,
    isSelectTeenUserLoading: _,
    isRequestingLink: b,
    isMoreLoading: j
  }
}