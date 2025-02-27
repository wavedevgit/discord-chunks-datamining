/** Chunk was on 78846 **/
n.d(t, {
  Z: () => u
}), n(653041), n(789020);
var a = n(544891),
  i = n(881052),
  r = n(687294),
  o = n(476326),
  l = n(45251),
  s = n(861990),
  c = n(388032);

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = a
    })
  }
  return e
}
class u extends r.Z {
  async uploadFiles(e, t) {
    let {
      addFilesTo: n
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    super.upload({
      name: c.NW.string(c.t.jfKTen)
    }, t, e);
    let a = new AbortController;
    try {
      if (this.files = e, this._aborted || (this._handleStart(() => a.abort()), !await this.compressAndCheckFileSize())) return;
      this.setUploadingTextForUI(), await (0, r.$)(this.files, !0, this._recomputeProgress.bind(this))
    } catch (e) {
      this._handleException(e)
    }
    try {
      return await this._createMessage(a.signal, t, n)
    } catch (e) {
      if (this._raiseEndpointErrors) throw e;
      this._handleException(e)
    }
  }
  async _createMessage(e, t, n) {
    var r, c, u, m;
    let p;
    let g = [];
    if ((this.files.forEach((e, t) => {
        let n = (0, s.B)(e, t);
        e.item.platform === o.ow.WEB && g.push(d({}, n))
      }), null != n && null != t) ? p = this._addAttachmentsToPayload(t, n, g) : (u = d({}, t), m = m = {
        attachments: g
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(m)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          n.push.apply(n, a)
        }
        return n
      })(Object(m)).forEach(function(e) {
        Object.defineProperty(u, e, Object.getOwnPropertyDescriptor(m, e))
      }), p = u), null != p.scheduled_timestamp) {
      try {
        let e = await (0, l.PV)({
          channelId: p.channel_id,
          scheduledTimestamp: p.scheduled_timestamp,
          messageSendData: {
            channelId: p.channel_id,
            content: p.content,
            flags: p.flags,
            nonce: p.nonce,
            message_reference: p.message_reference,
            allowed_mentions: p.allowed_mentions,
            tts: !1
          },
          attachments: g
        });
        return this._handleComplete(e.body), e.body
      } catch (e) {
        if (this._raiseEndpointErrors) throw new i.Hx(e);
        this._handleError({
          code: null == e ? void 0 : null === (r = e.body) || void 0 === r ? void 0 : r.code,
          body: null == e ? void 0 : e.body
        })
      }
      return
    }
    let h = {
        url: this._url,
        body: p,
        signal: e,
        rejectWithError: !1
      },
      f = "POST" === this._method ? a.tn.post : a.tn.patch;
    try {
      let e = await f(h);
      return this._handleComplete(e.body), e.body
    } catch (e) {
      if (this._raiseEndpointErrors) throw new i.Hx(e);
      this._handleError({
        code: null == e ? void 0 : null === (c = e.body) || void 0 === c ? void 0 : c.code,
        body: null == e ? void 0 : e.body
      })
    }
  }
  constructor(e, t = "POST", n) {
    super(e, t, n)
  }
}