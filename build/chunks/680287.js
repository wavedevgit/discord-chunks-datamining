/** Chunk was on 84414 **/
n.d(t, {
  Z: () => d
}), n(653041), n(789020);
var r = n(544891),
  i = n(881052),
  l = n(687294),
  o = n(476326),
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
class d extends l.Z {
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
      this.setUploadingTextForUI(), await (0, l.$)(this.files, !0, this._recomputeProgress.bind(this))
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
    var l, c, d, E;
    let _;
    let I = [];
    if ((this.files.forEach((e, t) => {
        let n = (0, s.B)(e, t);
        e.item.platform === o.ow.WEB && I.push(u({}, n))
      }), null != n && null != t) ? _ = this._addAttachmentsToPayload(t, n, I) : (d = u({}, t), E = E = {
        attachments: I
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(E)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(E)).forEach(function(e) {
        Object.defineProperty(d, e, Object.getOwnPropertyDescriptor(E, e))
      }), _ = d), null != _.scheduled_timestamp) {
      try {
        let e = await (0, a.PV)({
          channelId: _.channel_id,
          scheduledTimestamp: _.scheduled_timestamp,
          messageSendData: {
            channelId: _.channel_id,
            content: _.content,
            flags: _.flags,
            nonce: _.nonce,
            message_reference: _.message_reference,
            allowed_mentions: _.allowed_mentions,
            tts: !1
          },
          attachments: I
        });
        return this._handleComplete(e.body), e.body
      } catch (e) {
        if (this._raiseEndpointErrors) throw new i.Hx(e);
        this._handleError({
          code: null == e ? void 0 : null === (l = e.body) || void 0 === l ? void 0 : l.code,
          body: null == e ? void 0 : e.body
        })
      }
      return
    }
    let N = {
        url: this._url,
        body: _,
        signal: e,
        rejectWithError: !1
      },
      O = "POST" === this._method ? r.tn.post : r.tn.patch;
    try {
      let e = await O(N);
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