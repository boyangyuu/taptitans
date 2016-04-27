module uiskins {
	/**
	 *
	 * @author 
	 *
	 */
	export class GuildBagSendHighItemRenderer extends egret.gui.ItemRenderer {
		public costLbl:egret.gui.Label;
		public crystalLbl:egret.gui.Label;
		public sendLbl:egret.gui.Label;
		public titleLbl:egret.gui.Label;
		public sendBtn:egret.gui.Button;
		public constructor() {
			super();
			this.skinName = skins.components.GuildBagSendHighItemRendererSkin;
		}

		isTouchSend(){
			var cost = Conf.redEnvelope[1].cost;
			var diamond = gm.dataManage.data.diamond;
			var envelope = gm.dataManage.data.dailyEvent.envelope;
			var vip = gm.dataManage.data.vip;
			if(diamond >= cost && envelope <= 2 && vip >= 5){
				return true;
			}
			return false;
		}

		public childrenCreated() {
			this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onTouchLayer, this);
		}

		onTouchLayer(event:egret.TouchEvent){
			if(event.target == this.sendBtn && this.sendBtn.enabled){
				this.sendBtn.enabled = false;
				gm.gameUI.showLoadingLayer();
				tt.GuildManage.redEnvelope(2,function(data){
					var ly = new MessageGetRewardPanel("获得红包奖励",[{type:"crystal",num:data.num}]);
					gm.guiLayer.addElement(ly);
					Util.invokeCallback(this.data.updateFunction);
					gm.gameUI.hideLoadingLayer();
				}.bind(this),function(){
					gm.gameUI.hideLoadingLayer();
				}.bind(this));
			}
		}

		dataChanged() {
			super.dataChanged();
			this.setCostText();
			this.setCrystalText();
			this.setSendText();
			this.setTitleText();
			this.setSendBtn();
		}

		setCostText(){
			var cost = Conf.redEnvelope[2].cost;
			this.costLbl.text = _.sprintf("%d",cost);
		}

		setCrystalText(){
			var crystal = Conf.redEnvelope[2].crystal;
			this.crystalLbl.text = _.sprintf("%d",crystal);
		}

		setSendText(){
			var diamond = Conf.redEnvelope[2].diamond;
			this.sendLbl.text = _.sprintf("%d",diamond);
		}

		setTitleText(){
			var num = Conf.redEnvelope[2].num;
			this.titleLbl.text = _.sprintf("高级钻石红包%d个",num);
		}

		setSendBtn(){
			if(this.isTouchSend()){
				this.sendBtn.enabled = true;
			}
			else {
				this.sendBtn.enabled = false;
			}
		}

		public partAdded(partName: string,instance: any): void {
			super.partAdded(partName,instance);
		}

		public partRemoved(partName: string,instance: any): void {
			super.partRemoved(partName,instance);
		}
	}
}
