var game_file_list = [
	"system/Const.js",
	"ui/dialog/GuildInfoPanel.js",
	"ui/dialog/WeaponPanel.js",
	"ui/skin/BaseToggleBtn.js",
	"ui/skin/CommonItemButton.js",
	"game/InfoLayer.js",
	"system/Setting.js",
	"Main.js",
	"game/GameScene.js",
	"game/GameUI.js",
	"game/manage/DataManage.js",
	"game/manage/TimeManage.js",
	"system/1758.js",
	"system/DCAgent.js",
	"system/Network.js",
	"system/Wechat.js",
	"game/manage/GameManage.js",
	"tools/pool.js",
	"system/ActivityUtil.js",
	"tools/Armature.js",
	"system/SharedConst.js",
	"system/Util.js",
	"skins/components/GuildBadgeItemSkin.js",
	"skins/components/GuildGoldItemRendererSkin.js",
	"skins/components/GuildGoldLineItemRendererSkin.js",
	"system/System.js",
	"game/manage/BattleManage.js",
	"skins/components/EquipExpProgressBarSkin.js",
	"skins/components/GuildBagGetItemRendererSkin.js",
	"skins/dialog/GuildGoldLayerSkin.js",
	"ui/dialog/GuildGoldPKCompleteLayer.js",
	"ui/skin/GuildBadgeItem.js",
	"ui/skin/GuildGoldItemRenderer.js",
	"ui/skin/GuildGoldLineItemRenderer.js",
	"skins/components/GuildBadgeItemSelectSkin.js",
	"skins/components/GuildBagGetToggleBtnSkin.js",
	"skins/components/GuildBagSendToggleBtnSkin.js",
	"skins/components/GuildGoldScoreItemRendererSkin.js",
	"skins/components/GuildLvUpProgressBarSkin.js",
	"skins/components/GuildTextInputSkin.js",
	"skins/dialog/GuildBagGetPanelSkin.js",
	"skins/dialog/MessageGetRewardPanelSkin.js",
	"skins/dialog/MessagePanelSkin.js",
	"ui/dialog/GuildGoldLayer.js",
	"ui/skin/EquipExpProgressBar.js",
	"ui/skin/GuildBagGetItemRenderer.js",
	"game/manage/GuildManage.js",
	"game/manage/GuildwarManage.js",
	"skins/components/EquipElementItemSkin.js",
	"skins/components/GuildBagGetGeneralItemRendererSkin.js",
	"skins/components/GuildBagGetHighItemRendererSkin.js",
	"skins/components/GuildBagSendGeneralItemRendererSkin.js",
	"skins/components/GuildBagSendHighItemRendererSkin.js",
	"skins/components/GuildGoldItemSelectSkin.js",
	"skins/components/GuildGoldRewardItemRendererSkin.js",
	"skins/components/GuildSettingItemSelectSkin.js",
	"skins/components/RankToggleBtnSkin.js",
	"skins/dialog/GuildGoldScoreLayerSkin.js",
	"skins/dialog/GuildMessageInfoPanelSkin.js",
	"skins/dialog/GuildMessagePKInfoLayerSkin.js",
	"ui/dialog/GuildBagGetPanel.js",
	"ui/dialog/MessageGetRewardPanel.js",
	"ui/dialog/MessagePanel.js",
	"ui/skin/GuildBadgeItemSelect.js",
	"ui/skin/GuildBagGetToggleBtn.js",
	"ui/skin/GuildBagSendToggleBtn.js",
	"ui/skin/GuildGoldItemSelect.js",
	"ui/skin/GuildGoldScoreItemRenderer.js",
	"ui/skin/GuildLvUpProgressBar.js",
	"ui/skin/GuildTextInput.js",
	"skins/components/CommonItemButtonSkin.js",
	"skins/components/EquipSmallElementItemSkin.js",
	"skins/components/EquipToggleBtnSkin.js",
	"skins/components/GuildLvUpItemRendererSkin.js",
	"skins/components/GuildLvUpMVPItemRendererSkin.js",
	"skins/components/GuildLvUpMVPTitleItemRendererSkin.js",
	"skins/components/GuildMessageItemRendererSkin.js",
	"skins/components/GuildMessagePKItemRendererSkin.js",
	"skins/components/HeroesSkillExpSkin.js",
	"skins/components/PKProgressBarSkin.js",
	"skins/dialog/BuyTenTimesPanelSkin.js",
	"skins/dialog/GuildBadgePanelSkin.js",
	"skins/dialog/GuildBagInfoPanelSkin.js",
	"skins/dialog/GuildBagLayerSkin.js",
	"skins/dialog/GuildGoldRewardLayerSkin.js",
	"skins/dialog/GuildGoldSelectLayerSkin.js",
	"skins/dialog/GuildMemberOperationPanelSkin.js",
	"skins/dialog/GuildSetAttPanelSkin.js",
	"ui/dialog/GuildGoldScoreLayer.js",
	"ui/dialog/GuildMessageInfoPanel.js",
	"ui/layer/GuildMessagePKInfoLayer.js",
	"ui/skin/EquipElementItem.js",
	"ui/skin/GuildBagGetGeneralItemRenderer.js",
	"ui/skin/GuildBagGetHighItemRenderer.js",
	"ui/skin/GuildBagSendGeneralItemRenderer.js",
	"ui/skin/GuildBagSendHighItemRenderer.js",
	"ui/skin/GuildGoldRewardItemRenderer.js",
	"ui/skin/GuildSettingItemSelect.js",
	"ui/skin/RankToggleBtn.js",
	"skins/components/ActivityProgressBarSkin.js",
	"skins/components/BuyPopButtonSkin.js",
	"skins/components/CommonBigItemButtonSkin.js",
	"skins/components/EquipElementItemRendererSkin.js",
	"skins/components/GuildMainGoldItemRendererSkin.js",
	"skins/components/GuildMainItemRendererSkin.js",
	"skins/components/GuildMainRedEnvelopeItemRendererSkin.js",
	"skins/components/GuildMainToggleBtnSkin.js",
	"skins/components/GuildManageToggleBtnSkin.js",
	"skins/components/GuildMemberItemRendererSkin.js",
	"skins/components/GuildMemberToggleBtnSkin.js",
	"skins/components/GuildRankItemRendererSkin.js",
	"skins/components/GuildRankToggleBtnSkin.js",
	"skins/components/GuildShopItemRendererSkin.js",
	"skins/components/GuildShopToggleBtnSkin.js",
	"skins/components/HalidomItemGallerySkin.js",
	"skins/components/MailRewardElementSkin.js",
	"skins/components/SelectToggleBtnSkin.js",
	"skins/components/SettingItemSelectSkin.js",
	"skins/components/SettingTextInputSkin.js",
	"skins/components/SkillButtonSkin.js",
	"skins/components/StateButtonSkin.js",
	"skins/dialog/EquipInfoPanelSkin.js",
	"skins/dialog/EquipLevelUpPanelSkin.js",
	"skins/dialog/GuildLevelUpLayerSkin.js",
	"skins/dialog/GuildMessageLayerSkin.js",
	"skins/dialog/GuildMessagePKLayerSkin.js",
	"skins/dialog/GuildMessagePanelSkin.js",
	"skins/dialog/GuildNoticePanelSkin.js",
	"skins/dialog/GuildSettingLayerSkin.js",
	"skins/dialog/PKExplanationPanelSkin.js",
	"skins/dialog/PKRecoveryPanelSkin.js",
	"ui/dialog/BuyTenTimesPanel.js",
	"ui/dialog/GuildBadgePanel.js",
	"ui/dialog/GuildBagInfoPanel.js",
	"ui/dialog/GuildBagLayer.js",
	"ui/dialog/GuildGoldRewardLayer.js",
	"ui/dialog/GuildGoldSelectLayer.js",
	"ui/dialog/GuildMemberOperationPanel.js",
	"ui/dialog/GuildSetAttPanel.js",
	"ui/dialog/LoadingResLayer.js",
	"ui/layer/GuildWarStartLayer.js",
	"ui/skin/EquipSmallElementItem.js",
	"ui/skin/EquipToggleBtn.js",
	"ui/skin/GuildLvUpItemRenderer.js",
	"ui/skin/GuildLvUpMVPItemRenderer.js",
	"ui/skin/GuildLvUpMVPTitleItemRenderer.js",
	"ui/skin/GuildMessageItemRenderer.js",
	"ui/skin/GuildMessagePKItemRenderer.js",
	"ui/skin/HeroesSkillExp.js",
	"ui/skin/PKProgressBar.js",
	"game/manage/ActivityManage.js",
	"skins/components/ActivityAccuItemRendererSkin.js",
	"skins/components/ActivityCostDiamondItemRendererSkin.js",
	"skins/components/ActivityWorthBoxItemRendererSkin.js",
	"skins/components/EveryDayItemSelectSkin.js",
	"skins/components/GuildCreateToggleBtnSkin.js",
	"skins/components/GuildHeroItemSkin.js",
	"skins/components/GuildJoinItemRendererSkin.js",
	"skins/components/GuildJoinToggleBtnSkin.js",
	"skins/components/GuildMainGroupSkin.js",
	"skins/components/GuildManageGroupSkin.js",
	"skins/components/GuildMemberGroupSkin.js",
	"skins/components/GuildRankGroupSkin.js",
	"skins/components/GuildSearchItemRendererSkin.js",
	"skins/components/GuildSearchToggleBtnSkin.js",
	"skins/components/GuildShopGroupSkin.js",
	"skins/components/PKMoraleProgressGroupSkin.js",
	"skins/components/RankBestItemListSkin.js",
	"skins/dialog/ArtifactListSkin.js",
	"skins/dialog/ArtifactResetPanelSkin.js",
	"skins/dialog/EquipLayerSkin.js",
	"skins/dialog/HeroesSkillPanelSkin.js",
	"skins/dialog/MailMessagePanelSkin.js",
	"skins/dialog/MasterSkillPanelSkin.js",
	"skins/dialog/MessageNotOpponentPanelSkin.js",
	"skins/dialog/PrestigePanelSkin.js",
	"skins/dialog/PrestigeSkillPanelSkin.js",
	"skins/dialog/ShareLayerSkin.js",
	"ui/dialog/EquipInfoPanel.js",
	"ui/dialog/EquipLevelUpPanel.js",
	"ui/dialog/GuildMessagePanel.js",
	"ui/dialog/GuildNoticePanel.js",
	"ui/dialog/PKExplanationPanel.js",
	"ui/dialog/PKRecoveryPanel.js",
	"ui/layer/GuildLevelUpLayer.js",
	"ui/layer/GuildMessageLayer.js",
	"ui/layer/GuildMessagePKLayer.js",
	"ui/layer/GuildSettingLayer.js",
	"ui/skin/ActivityProgressBar.js",
	"ui/skin/BuyPopButton.js",
	"ui/skin/CommonBigItemButton.js",
	"ui/skin/EquipElementItemRenderer.js",
	"ui/skin/GuildMainGoldItemRenderer.js",
	"ui/skin/GuildMainItemRenderer.js",
	"ui/skin/GuildMainRedEnvelopeItemRenderer.js",
	"ui/skin/GuildMainToggleBtn.js",
	"ui/skin/GuildManageToggleBtn.js",
	"ui/skin/GuildMemberItemRenderer.js",
	"ui/skin/GuildMemberToggleBtn.js",
	"ui/skin/GuildRankItemRenderer.js",
	"ui/skin/GuildRankToggleBtn.js",
	"ui/skin/GuildShopItemRenderer.js",
	"ui/skin/GuildShopToggleBtn.js",
	"ui/skin/HalidomItemGalleryRenderer.js",
	"ui/skin/MailRewardElement.js",
	"ui/skin/SelectBottomBtn.js",
	"ui/skin/SettingItemSelect.js",
	"ui/skin/SettingTextInput.js",
	"ui/skin/SkillButton.js",
	"ui/skin/StateButton.js",
	"skins/components/AchievementItemListSkin.js",
	"skins/components/ActivityAccuGroupSkin.js",
	"skins/components/ActivityCatGroupSkin.js",
	"skins/components/ActivityCostDiamondGroupSkin.js",
	"skins/components/ActivityEggGroupSkin.js",
	"skins/components/ActivityGrowthFundSkin.js",
	"skins/components/ActivityItemSelectSkin.js",
	"skins/components/ActivityLifeCardGroupSkin.js",
	"skins/components/ActivityMonthSkin.js",
	"skins/components/ActivityNewBagGroupSkin.js",
	"skins/components/ActivityThreeSkin.js",
	"skins/components/ActivityVipGroupSkin.js",
	"skins/components/ActivityWorthBagGroupSkin.js",
	"skins/components/ActivityWorthBoxSkin.js",
	"skins/components/BossTimeProgressBarSkin.js",
	"skins/components/DailyTaskItemListSkin.js",
	"skins/components/GuildCreateGroupSkin.js",
	"skins/components/GuildJoinGroupSkin.js",
	"skins/components/GuildSearchGroupSkin.js",
	"skins/components/HPProgressBarSkin.js",
	"skins/components/HalidomAllSkin.js",
	"skins/components/HalidomBuyArtifactItemRendererSkin.js",
	"skins/components/HalidomItemRendererSkin.js",
	"skins/components/HeroesBuyWeaponItemRendererSkin.js",
	"skins/components/HeroesItemRendererSkin.js",
	"skins/components/MailItemRendererSkin.js",
	"skins/components/MailLastItemRendererSkin.js",
	"skins/components/MasterPlayerItemRendererSkin.js",
	"skins/components/MasterPrestigeItemRendererSkin.js",
	"skins/components/MasterSkillItemRendererSkin.js",
	"skins/components/MatchRankItemListSkin.js",
	"skins/components/RankBestGroupSkin.js",
	"skins/components/RankInviteItemListSkin.js",
	"skins/components/RankItemListSkin.js",
	"skins/components/RankLineItemListSkin.js",
	"skins/components/RankPKItemListSkin.js",
	"skins/components/ShopBuyDiamondItemRendererSkin.js",
	"skins/components/ShopBuyLifeCardItemRendererSkin.js",
	"skins/components/ShopBuyMonthCardItemRendererSkin.js",
	"skins/components/ShopBuySkillItemRendererSkin.js",
	"skins/components/ShopBuySupMonthCardItemRendererSkin.js",
	"skins/components/ShopShareItemRendererSkin.js",
	"skins/dialog/CouponPanelSkin.js",
	"skins/dialog/DataLayerSkin.js",
	"skins/dialog/GuildLayerSkin.js",
	"skins/dialog/HookPanelSkin.js",
	"skins/dialog/MatchHardRewardLayerSkin.js",
	"skins/dialog/MatchPrestigePanelSkin.js",
	"skins/dialog/MatchRewardLayerSkin.js",
	"skins/dialog/PetPKLayerSkin.js",
	"skins/mod/BottomShowLayerSkin.js",
	"skins/mod/BottomSkillLayerSkin.js",
	"skins/mod/BottomTabBarSkin.js",
	"skins/mod/TopStageTitleLayerSkin.js",
	"ui/dialog/ArtifactList.js",
	"ui/dialog/ArtifactResetPanel.js",
	"ui/dialog/EquipLayer.js",
	"ui/dialog/HeroesSkillPanel.js",
	"ui/dialog/MailMessagePanel.js",
	"ui/dialog/MasterSkillPanel.js",
	"ui/dialog/MessageNotOpponentPanel.js",
	"ui/dialog/PrestigePanel.js",
	"ui/dialog/PrestigeSkillPanel.js",
	"ui/dialog/ShareLayer.js",
	"ui/skin/ActivityAccuItemRenderer.js",
	"ui/skin/ActivityCostDiamondItemRenderer.js",
	"ui/skin/ActivityWorthBoxItem.js",
	"ui/skin/EveryDayItemSelect.js",
	"ui/skin/GuildCreateToggleBtn.js",
	"ui/skin/GuildHeroItem.js",
	"ui/skin/GuildJoinItemRenderer.js",
	"ui/skin/GuildJoinToggleBtn.js",
	"ui/skin/GuildMainGroup.js",
	"ui/skin/GuildManageGroup.js",
	"ui/skin/GuildMemberGroup.js",
	"ui/skin/GuildRankGroup.js",
	"ui/skin/GuildSearchItemRenderer.js",
	"ui/skin/GuildSearchToggleBtn.js",
	"ui/skin/GuildShopGroup.js",
	"ui/skin/PKMoraleProgressGroup.js",
	"ui/skin/RankBestItemList.js",
	"skins/components/GuildHeroCompleteItemRendererSkin.js",
	"skins/components/GuildHeroItemRendererSkin.js",
	"skins/components/GuildPlayerItemSkin.js",
	"skins/components/PKHeroItemListSkin.js",
	"skins/components/WeaponItemSelectSkin.js",
	"skins/dialog/AchievementLayerSkin.js",
	"skins/dialog/ActivityLayerSkin.js",
	"skins/dialog/DailyRewardPanelSkin.js",
	"skins/dialog/DailyTaskLayerSkin.js",
	"skins/dialog/EveryDayPanelSkin.js",
	"skins/dialog/GuildCreateLayerSkin.js",
	"skins/dialog/KillBossPanelSkin.js",
	"skins/dialog/MailLayerSkin.js",
	"skins/dialog/MatchHardRankLayerSkin.js",
	"skins/dialog/MatchRankLayerSkin.js",
	"skins/dialog/MatchStartPanelSkin.js",
	"skins/dialog/MessageDailyPanelSkin.js",
	"skins/dialog/NewPlayerGiftBagPanelSkin.js",
	"skins/dialog/OffOnLineCoinPanelSkin.js",
	"skins/dialog/PKSearchLayerSkin.js",
	"skins/dialog/PetPKPanelSkin.js",
	"skins/dialog/PrevenancePanelSkin.js",
	"skins/dialog/RankBestLayerSkin.js",
	"skins/dialog/RankLayerSkin.js",
	"skins/dialog/SettingPanelSkin.js",
	"skins/mod/BottomPopUpDialogSkin.js",
	"ui/dialog/CouponPanel.js",
	"ui/dialog/HookPanel.js",
	"ui/dialog/MatchPrestigePanel.js",
	"ui/dialog/MatchRewardLayer.js",
	"ui/dialog/PKCompleteLayer.js",
	"ui/dialog/PetPKLayer.js",
	"ui/layer/DataLayer.js",
	"ui/layer/GuildLayer.js",
	"ui/mod/BottomShowLayer.js",
	"ui/mod/BottomSkillLayer.js",
	"ui/mod/BottomTabBarLayer.js",
	"ui/mod/TopStageTitleLayer.js",
	"ui/skin/AchievementItemList.js",
	"ui/skin/ActivityAccuGroup.js",
	"ui/skin/ActivityCatGroup.js",
	"ui/skin/ActivityCostDiamondGroup.js",
	"ui/skin/ActivityEggGroup.js",
	"ui/skin/ActivityGrowthFund.js",
	"ui/skin/ActivityItemSelect.js",
	"ui/skin/ActivityLifeCardGroup.js",
	"ui/skin/ActivityMonth.js",
	"ui/skin/ActivityNewBagGroup.js",
	"ui/skin/ActivityThree.js",
	"ui/skin/ActivityVipGroup.js",
	"ui/skin/ActivityWorthBox.js",
	"ui/skin/ActivityWorthGroup.js",
	"ui/skin/DailyTaskItemList.js",
	"ui/skin/GuildCreateGroup.js",
	"ui/skin/GuildJoinGroup.js",
	"ui/skin/GuildSearchGroup.js",
	"ui/skin/HalidomAllRenderer.js",
	"ui/skin/HalidomBuyArtifactItemRenderer.js",
	"ui/skin/HalidomItemRenderer.js",
	"ui/skin/HeroesBuyWeaponItemRenderer.js",
	"ui/skin/HeroesItemRenderer.js",
	"ui/skin/MailItemRenderer.js",
	"ui/skin/MailLastItemRenderer.js",
	"ui/skin/MasterPlayerItemRenderer.js",
	"ui/skin/MasterPrestigeItemRenderer.js",
	"ui/skin/MasterSkillItemRenderer.js",
	"ui/skin/MatchRankItemList.js",
	"ui/skin/RankBestGroup.js",
	"ui/skin/RankInviteItemList.js",
	"ui/skin/RankItemList.js",
	"ui/skin/RankLineItemList.js",
	"ui/skin/RankPKItemList.js",
	"ui/skin/ShopBuyDiamondItemRenderer.js",
	"ui/skin/ShopBuyLifeCardItemRenderer.js",
	"ui/skin/ShopBuyMonthCardItemRenderer.js",
	"ui/skin/ShopBuySkillItemRenderer.js",
	"ui/skin/ShopBuySupMonthCardItemRenderer.js",
	"ui/skin/ShopShareItemRenderer.js",
	"ui/skin/TopBossTimeProgressBar.js",
	"ui/skin/TopHPProgressBar.js",
	"skins/dialog/GuildWarAttLayerSkin.js",
	"skins/mod/BottomLayerSkin.js",
	"skins/mod/LeftBtnLayerSkin.js",
	"skins/mod/RightBtnLayerSkin.js",
	"skins/mod/TopLayerSkin.js",
	"system/Define.js",
	"ui/dialog/ActivityLayer.js",
	"ui/dialog/DailyRewardPanel.js",
	"ui/dialog/EveryDayPanel.js",
	"ui/dialog/KillBossPanel.js",
	"ui/dialog/MatchRankLayer.js",
	"ui/dialog/MatchStartPanel.js",
	"ui/dialog/MessageDailyPanel.js",
	"ui/dialog/NewPlayerGiftBagPanel.js",
	"ui/dialog/OffOnLineCoinPanel.js",
	"ui/dialog/PKSearchLayer.js",
	"ui/dialog/PetPKPanel.js",
	"ui/dialog/PrevenancePanel.js",
	"ui/dialog/RankBestLayer.js",
	"ui/dialog/SettingPanel.js",
	"ui/layer/AchievementLayer.js",
	"ui/layer/DailyTaskLayer.js",
	"ui/layer/GuildCreateLayer.js",
	"ui/layer/MailLayer.js",
	"ui/layer/RankLayer.js",
	"ui/mod/BottomPopUpDialog.js",
	"ui/skin/GuildHeroCompleteItemRenderer.js",
	"ui/skin/GuildHeroItemRenderer.js",
	"ui/skin/GuildPlayerItem.js",
	"ui/skin/PKHeroItemList.js",
	"ui/skin/WeaponItemSelect.js",
	"AssetAdapter.js",
	"LoadingUI.js",
	"skins/components/GuildGoldPKCompleteItemRendererSkin.js",
	"skins/components/GuildPlayerItemRendererSkin.js",
	"skins/components/PKHeroCompleteItemRendererSkin.js",
	"skins/components/PKHeroItemRendererSkin.js",
	"skins/dialog/BoardPanelSkin.js",
	"skins/dialog/DeadHeroPanelSkin.js",
	"skins/dialog/LoadingLayerSkin.js",
	"skins/dialog/MessagePayFailPanelSkin.js",
	"skins/dialog/ToastLayerSkin.js",
	"tools/ResVersionManager.js",
	"ui/layer/GuildWarAttLayer.js",
	"ui/mod/BottomLayer.js",
	"ui/mod/LeftBtnLayer.js",
	"ui/mod/RightBtnLayer.js",
	"ui/mod/TopLayer.js",
	"characters/Master.js",
	"game/manage/ArtifactManage.js",
	"game/manage/HeroManage.js",
	"game/manage/MasterManage.js",
	"skins/GameUISkin.js",
	"skins/components/ListSkin.js",
	"skins/components/TextInputSkin.js",
	"skins/dialog/GuildInfoPanelSkin.js",
	"skins/dialog/GuildWarStartLayerSkin.js",
	"skins/dialog/PKCompleteLayerSkin.js",
	"skins/dialog/WeaponPanelSkin.js",
	"tools/MovieClip.js",
	"ui/dialog/BoardPanel.js",
	"ui/dialog/DeadHeroPanel.js",
	"ui/dialog/MessagePayFailPanel.js",
	"ui/dialog/ToastLayer.js",
	"ui/layer/LoadingLayer.js",
	"ui/skin/GuildGoldPKCompleteItemRenderer.js",
	"ui/skin/GuildPlayerItemRenderer.js",
	"ui/skin/PKHeroCompleteItemRenderer.js",
	"ui/skin/PKHeroItemRenderer.js"
];