/** Chunk was on 98650 **/
n.d(t, {
  Z: () => d
}), n(653041), n(789020);
var r = n(544891),
  i = n(881052),
  o = n(687294),
  l = n(476326),
  a = n(45251),
  s = n(861990),
  c = n(388032);

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}
class d extends o.Z {
  async uploadFiles(e, t) {
    let {
      addFilesTo: n
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    super.upload({
      name: c.NW.string(c.t.jfKTen)
    }, t, e);
    let r = new AbortController;
    try {
      if (this.files = e, this._aborted || (this._handleStart(() => r.abort()), !await this.compressAndCheckFileSize())) return;
      this.setUploadingTextForUI(), await (0, o.$)(this.files, !0, this._recomputeProgress.bind(this))
    } catch (e) {
      this._handleException(e)
    }
    try {
      return await this._createMessage(r.signal, t, n)
    } catch (e) {
      if (this._raiseEndpointErrors) throw e;
      this._handleException(e)
    }
  }
  async _createMessage(e, t, n) {
    var o, c, d, _;
    let p;
    let E = [];
    if ((this.files.forEach((e, t) => {
        let n = (0, s.B)(e, t);
        e.item.platform === l.ow.WEB && E.push(u({}, n))
      }), null != n && null != t) ? p = this._addAttachmentsToPayload(t, n, E) : (d = u({}, t), _ = _ = {
        attachments: E
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(_)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(_)).forEach(function(e) {
        Object.defineProperty(d, e, Object.getOwnPropertyDescriptor(_, e))
      }), p = d), null != p.scheduled_timestamp) {
      try {
        let e = await (0, a.PV)({
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
          attachments: E
        });
        return this._handleComplete(e.body), e.body
      } catch (e) {
        if (this._raiseEndpointErrors) throw new i.Hx(e);
        this._handleError({
          code: null == e ? void 0 : null === (o = e.body) || void 0 === o ? void 0 : o.code,
          body: null == e ? void 0 : e.body
        })
      }
      return
    }
    let f = {
        url: this._url,
        body: p,
        signal: e,
        rejectWithError: !1
      },
      h = "POST" === this._method ? r.tn.post : r.tn.patch;
    try {
      let e = await h(f);
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