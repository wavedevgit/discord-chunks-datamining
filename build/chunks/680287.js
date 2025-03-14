/** Chunk was on 73628 **/
r.d(t, {
  Z: () => d
}), r(653041), r(789020);
var A = r(544891),
  n = r(881052),
  o = r(687294),
  a = r(476326),
  l = r(45251),
  i = r(861990),
  s = r(388032);

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      A = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (A = A.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), A.forEach(function(t) {
      var A;
      A = r[t], t in e ? Object.defineProperty(e, t, {
        value: A,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = A
    })
  }
  return e
}
class d extends o.Z {
  async uploadFiles(e, t) {
    let {
      addFilesTo: r
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    super.upload({
      name: s.NW.string(s.t.jfKTen)
    }, t, e);
    let A = new AbortController;
    try {
      if (this.files = e, this._aborted || (this._handleStart(() => A.abort()), !await this.compressAndCheckFileSize())) return;
      this.setUploadingTextForUI(), await (0, o.$)(this.files, !0, this._recomputeProgress.bind(this))
    } catch (e) {
      this._handleException(e)
    }
    try {
      return await this._createMessage(A.signal, t, r)
    } catch (e) {
      if (this._raiseEndpointErrors) throw e;
      this._handleException(e)
    }
  }
  async _createMessage(e, t, r) {
    var o, s, d, u;
    let f;
    let g = [];
    if ((this.files.forEach((e, t) => {
        let r = (0, i.B)(e, t);
        e.item.platform === a.ow.WEB && g.push(c({}, r))
      }), null != r && null != t) ? f = this._addAttachmentsToPayload(t, r, g) : (d = c({}, t), u = u = {
        attachments: g
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(u)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var A = Object.getOwnPropertySymbols(e);
          r.push.apply(r, A)
        }
        return r
      })(Object(u)).forEach(function(e) {
        Object.defineProperty(d, e, Object.getOwnPropertyDescriptor(u, e))
      }), f = d), null != f.scheduled_timestamp) {
      try {
        let e = await (0, l.PV)({
          channelId: f.channel_id,
          scheduledTimestamp: f.scheduled_timestamp,
          messageSendData: {
            channelId: f.channel_id,
            content: f.content,
            flags: f.flags,
            nonce: f.nonce,
            message_reference: f.message_reference,
            allowed_mentions: f.allowed_mentions,
            tts: !1
          },
          attachments: g
        });
        return this._handleComplete(e.body), e.body
      } catch (e) {
        if (this._raiseEndpointErrors) throw new n.Hx(e);
        this._handleError({
          code: null == e ? void 0 : null === (o = e.body) || void 0 === o ? void 0 : o.code,
          body: null == e ? void 0 : e.body
        })
      }
      return
    }
    let p = {
        url: this._url,
        body: f,
        signal: e,
        rejectWithError: !1
      },
      m = "POST" === this._method ? A.tn.post : A.tn.patch;
    try {
      let e = await m(p);
      return this._handleComplete(e.body), e.body
    } catch (e) {
      if (this._raiseEndpointErrors) throw new n.Hx(e);
      this._handleError({
        code: null == e ? void 0 : null === (s = e.body) || void 0 === s ? void 0 : s.code,
        body: null == e ? void 0 : e.body
      })
    }
  }
  constructor(e, t = "POST", r) {
    super(e, t, r)
  }
}