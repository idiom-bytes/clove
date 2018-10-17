Search.setIndex({docnames:["README","api","index","refund","tips-and-tricks","usage"],envversion:53,filenames:["README.md","api.md","index.md","refund.md","tips-and-tricks.md","usage.md"],objects:{"clove.block_explorer":{base:[1,0,0,"-"],blockcypher:[1,0,0,"-"],cryptoid:[1,0,0,"-"],etherscan:[1,0,0,"-"],insight:[1,0,0,"-"]},"clove.block_explorer.base":{BaseAPI:[1,1,1,""]},"clove.block_explorer.base.BaseAPI":{API:[1,2,1,""],get_confirmations_from_tx_json:[1,3,1,""]},"clove.block_explorer.blockcypher":{BlockcypherAPI:[1,1,1,""]},"clove.block_explorer.blockcypher.BlockcypherAPI":{api_url:[1,2,1,""],blockcypher_url:[1,3,1,""],extract_secret_from_redeem_transaction:[1,3,1,""],get_balance:[1,3,1,""],get_fee:[1,3,1,""],get_first_vout_from_tx_json:[1,3,1,""],get_latest_block:[1,3,1,""],get_transaction:[1,3,1,""],get_transaction_url:[1,3,1,""],get_utxo:[1,3,1,""]},"clove.block_explorer.cryptoid":{CryptoidAPI:[1,1,1,""]},"clove.block_explorer.cryptoid.CryptoidAPI":{api_url:[1,2,1,""],cryptoid_url:[1,3,1,""],extract_secret_from_redeem_transaction:[1,3,1,""],get_balance:[1,3,1,""],get_fee:[1,3,1,""],get_first_vout_from_tx_json:[1,3,1,""],get_latest_block:[1,3,1,""],get_transaction:[1,3,1,""],get_transaction_url:[1,3,1,""],get_utxo:[1,3,1,""]},"clove.block_explorer.etherscan":{EtherscanAPI:[1,1,1,""]},"clove.block_explorer.etherscan.EtherscanAPI":{find_redeem_token_transaction:[1,4,1,""],find_redeem_transaction:[1,4,1,""]},"clove.block_explorer.insight":{InsightAPIv4:[1,1,1,""]},"clove.block_explorer.insight.InsightAPIv4":{api_url:[1,2,1,""],extract_secret_from_redeem_transaction:[1,3,1,""],get_balance:[1,3,1,""],get_fee:[1,3,1,""],get_first_vout_from_tx_json:[1,3,1,""],get_latest_block:[1,3,1,""],get_transaction:[1,3,1,""],get_transaction_url:[1,3,1,""],get_utxo:[1,3,1,""],publish:[1,3,1,""],ui_url:[1,2,1,""]},"clove.network":{base:[1,0,0,"-"]},"clove.network.base":{BaseNetwork:[1,1,1,""]},"clove.network.base.BaseNetwork":{bitcoin_based:[1,2,1,""],blockexplorer_tx:[1,2,1,""],default_symbol:[1,2,1,""],ethereum_based:[1,2,1,""],get_network_by_symbol:[1,3,1,""],is_test_network:[1,3,1,""],name:[1,2,1,""],networks:[1,2,1,""],set_symbol_mapping:[1,3,1,""],symbols:[1,2,1,""],testnet:[1,2,1,""]},"clove.network.bitcoin":{base:[1,0,0,"-"],contract:[1,0,0,"-"],transaction:[1,0,0,"-"],utxo:[1,0,0,"-"],wallet:[1,0,0,"-"]},"clove.network.bitcoin.base":{BitcoinBaseNetwork:[1,1,1,""],NoAPI:[1,1,1,""]},"clove.network.bitcoin.base.BitcoinBaseNetwork":{atomic_swap:[1,4,1,""],audit_contract:[1,4,1,""],base58_prefixes:[1,2,1,""],bitcoin_based:[1,2,1,""],blacklist_nodes:[1,2,1,""],broadcast_transaction:[1,4,1,""],capture_messages:[1,4,1,""],connect:[1,4,1,""],connection:[1,2,1,""],create_connection:[1,4,1,""],deserialize_raw_transaction:[1,5,1,""],extract_secret:[1,3,1,""],filter_blacklisted_nodes:[1,4,1,""],get_current_fee_per_kb:[1,3,1,""],get_current_node:[1,4,1,""],get_new_wallet:[1,3,1,""],get_nodes:[1,5,1,""],get_wallet:[1,3,1,""],is_valid_address:[1,3,1,""],message_start:[1,2,1,""],name:[1,2,1,""],nodes:[1,2,1,""],port:[1,2,1,""],protocol_version:[1,2,1,""],publish:[1,4,1,""],reset_connection:[1,4,1,""],seeds:[1,2,1,""],send_inventory:[1,4,1,""],send_message:[1,4,1,""],send_ping:[1,4,1,""],send_pong:[1,4,1,""],send_verack:[1,4,1,""],send_version:[1,4,1,""],split_message:[1,3,1,""],switch_params:[1,3,1,""],symbols:[1,2,1,""],terminate:[1,4,1,""],update_blacklist:[1,4,1,""],version_packet:[1,4,1,""]},"clove.network.bitcoin.base.NoAPI":{API:[1,2,1,""],extract_secret_from_redeem_transaction:[1,3,1,""],get_balance:[1,5,1,""],get_latest_block:[1,3,1,""],get_transaction:[1,5,1,""],get_utxo:[1,3,1,""]},"clove.network.bitcoin.contract":{BitcoinContract:[1,1,1,""]},"clove.network.bitcoin.contract.BitcoinContract":{get_contract_utxo:[1,4,1,""],is_valid_contract_script:[1,5,1,""],participate:[1,4,1,""],redeem:[1,4,1,""],refund:[1,4,1,""],show_details:[1,4,1,""],transaction_address:[1,2,1,""]},"clove.network.bitcoin.transaction":{BitcoinAtomicSwapTransaction:[1,1,1,""],BitcoinTransaction:[1,1,1,""]},"clove.network.bitcoin.transaction.BitcoinAtomicSwapTransaction":{add_fee:[1,4,1,""],build_atomic_swap_contract:[1,4,1,""],build_outputs:[1,4,1,""],generate_hash:[1,4,1,""],init_hours:[1,2,1,""],participate_hours:[1,2,1,""],set_locktime:[1,4,1,""],show_details:[1,4,1,""],validate_address:[1,4,1,""]},"clove.network.bitcoin.transaction.BitcoinTransaction":{add_fee:[1,4,1,""],add_fee_and_sign:[1,4,1,""],address:[1,2,1,""],build_outputs:[1,4,1,""],calculate_fee:[1,4,1,""],create_unsigned_transaction:[1,4,1,""],get_transaction_url:[1,4,1,""],publish:[1,4,1,""],raw_transaction:[1,2,1,""],show_details:[1,4,1,""],sign:[1,4,1,""],size:[1,2,1,""],validate_address:[1,4,1,""]},"clove.network.bitcoin.utxo":{Utxo:[1,1,1,""]},"clove.network.bitcoin.utxo.Utxo":{outpoint:[1,2,1,""],parsed_script:[1,2,1,""],tx_in:[1,2,1,""],unsigned_script_sig:[1,2,1,""]},"clove.network.bitcoin.wallet":{BitcoinWallet:[1,1,1,""]},"clove.network.bitcoin.wallet.BitcoinWallet":{decrypt_private_key:[1,5,1,""],encrypt_private_key:[1,5,1,""],get_private_key:[1,4,1,""],get_public_key:[1,4,1,""]},"clove.network.ethereum":{base:[1,0,0,"-"],contract:[1,0,0,"-"],transaction:[1,0,0,"-"],wallet:[1,0,0,"-"]},"clove.network.ethereum.base":{EthereumBaseNetwork:[1,1,1,""]},"clove.network.ethereum.base.EthereumBaseNetwork":{API:[1,2,1,""],abi:[1,2,1,""],approve_token:[1,4,1,""],atomic_swap:[1,4,1,""],audit_contract:[1,4,1,""],blockexplorer_tx:[1,2,1,""],contract_address:[1,2,1,""],deserialize_raw_transaction:[1,5,1,""],ethereum_based:[1,2,1,""],extract_method_id:[1,5,1,""],extract_secret_from_redeem_transaction:[1,4,1,""],filtering_supported:[1,2,1,""],find_redeem_token_transaction:[1,4,1,""],find_redeem_transaction:[1,4,1,""],find_transaction_details_in_redeem_event:[1,4,1,""],get_latest_block:[1,2,1,""],get_method_name:[1,4,1,""],get_new_wallet:[1,3,1,""],get_raw_transaction:[1,5,1,""],get_token_by_address:[1,4,1,""],get_token_by_attribute:[1,3,1,""],get_token_by_symbol:[1,3,1,""],get_token_from_token_contract:[1,4,1,""],get_transaction:[1,4,1,""],get_transaction_url:[1,3,1,""],get_wallet:[1,3,1,""],is_valid_address:[1,5,1,""],method_id:[1,5,1,""],name:[1,2,1,""],publish:[1,4,1,""],sign:[1,5,1,""],sign_raw_transaction:[1,3,1,""],symbols:[1,2,1,""],tokens:[1,2,1,""],unify_address:[1,5,1,""],value_from_base_units:[1,5,1,""],value_to_base_units:[1,5,1,""],web3_provider_address:[1,2,1,""]},"clove.network.ethereum.contract":{EthereumContract:[1,1,1,""]},"clove.network.ethereum.contract.EthereumContract":{contract:[1,2,1,""],find_redeem_transaction:[1,4,1,""],find_secret:[1,4,1,""],get_balance:[1,4,1,""],is_token_contract:[1,2,1,""],participate:[1,4,1,""],redeem:[1,4,1,""],refund:[1,4,1,""],show_details:[1,4,1,""]},"clove.network.ethereum.transaction":{EthereumAtomicSwapTransaction:[1,1,1,""],EthereumTokenApprovalTransaction:[1,1,1,""],EthereumTokenTransaction:[1,1,1,""],EthereumTransaction:[1,1,1,""]},"clove.network.ethereum.transaction.EthereumAtomicSwapTransaction":{init_hours:[1,2,1,""],participate_hours:[1,2,1,""],set_contract:[1,4,1,""],set_locktime:[1,4,1,""],set_secrets:[1,4,1,""],show_details:[1,4,1,""]},"clove.network.ethereum.transaction.EthereumTokenApprovalTransaction":{show_details:[1,4,1,""]},"clove.network.ethereum.transaction.EthereumTokenTransaction":{show_details:[1,4,1,""]},"clove.network.ethereum.transaction.EthereumTransaction":{get_transaction_url:[1,4,1,""],publish:[1,4,1,""],raw_transaction:[1,2,1,""],show_details:[1,4,1,""],sign:[1,4,1,""]},"clove.network.ethereum.wallet":{EthereumWallet:[1,1,1,""]},"clove.utils":{bitcoin:[1,0,0,"-"],external_source:[1,0,0,"-"],hashing:[1,0,0,"-"],logging:[1,0,0,"-"],network:[1,0,0,"-"],search:[1,0,0,"-"]},"clove.utils.bitcoin":{auto_switch_params:[1,6,1,""],from_base_units:[1,6,1,""],to_base_units:[1,6,1,""]},"clove.utils.external_source":{clove_req_json:[1,6,1,""]},"clove.utils.hashing":{generate_secret_with_hash:[1,6,1,""]},"clove.utils.logging":{logger:[1,7,1,""]},"clove.utils.network":{generate_params_object:[1,6,1,""]},"clove.utils.search":{get_network_by_symbol:[1,6,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","classmethod","Python class method"],"4":["py","method","Python method"],"5":["py","staticmethod","Python static method"],"6":["py","function","Python function"],"7":["py","data","Python data"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:classmethod","4":"py:method","5":"py:staticmethod","6":"py:function","7":"py:data"},terms:{"0000000000000000000e2d8d964b4da69f2f30b79aaa58597848719bf0b86a1b":1,"010000000144ab08a5f0a931d494f0d14dedadfb416e7fb94cac0ce7d504751cabe17c311f00000000df483045022100837496713462529685110ac60e600019dff6d3a44c77f817ece5da64ca4dc42e022011b64dd743399c5c2ea7dda941a4a837d1497087e13ff6511a7e2c362c176a300141044fbe9cf6ef9bf4a13a693ee1d431eb700a592e8097619e0cfe82aff2a5c231e7154e464e4ec94201007b403b6de9a5819b0bc31eef0741c4fe6e932bca6d9cca004c5163a61446260875cb8c88ba918cdd913ae23c59562f95298876a9141a376f6634e41c22b28bc9ef3336a623717083a46704396b645bb17576a9142b6a3314e8fcf1f1fd6b4d70b112bd5a192850576888ac00000000016094b500000000001976a9142b6a3314e8fcf1f1fd6b4d70b112bd5a1928505788ac396b645b":3,"01000000017354e4db89af35f391ba06be08dd95e6843807878bd9e23a84ec31e344e419a000000000e0483045022100d3e8f684e2bcdfe43a3f8ea6f6f77a97c7ebfe5e6ba3f280a078f18967d2b43a02204b40068e347e607438c893b83439099bf150f962a5b1009709d513732b4c6f0e0121028164de7b41f30fafac11350539035b38304def75c448d24178b6bc9ac902e95e20c480afb333623864901c968022a07dd93fe3c06f5684ea728b8113e17fa91bd9514c5163a61450314a793bf317665ecdc54c2e843bb106aeee158876a914fbed00c1502fded3dfa2524f8672ee013bb3f28f670465bab85bb17576a914a96a92963b7a65ac904875cfa5d535b3115888276888ac0000000001fd8c2d00000000001976a914fbed00c1502fded3dfa2524f8672ee013bb3f28f88ac00000000":5,"0100000001741a87828215c8bfeef3cfa70925ce91bca806f4f3dd931092f3b1727692504e000000008b483045022100bbd11530d3ea9cdf7b6385ff9aa884acdc04c8cdc96e182360ef5e69fb270512022054c0c5d2024878324af45b7ca5d81b19099e847976a0bbba2d23741a30f6eab401410431ab07973bbb5dbc6b7422fc7322abb5df15f77694c0b15b09a325996af47ddd887c7eaa72c656a71fcb333068956de7b3e2f15deaafc1d9285d779ca1b6a3f60000000002a08601000000000017a914cb4731b2c83362dcd05bba45e5f0ab8cd8642e4a876b730200000000001976a914621f617c765c3caa5ce1bb67f6a3e51382b8da2988ac00000000":5,"010000000184a38a4e8743964249665fb241fbd3":[1,4],"0100000001aa25fd5f63cb41d6ee7dd495256046b4c3f17d4540a1b258a06bfefac30da60900000000fdff0047304402201c8869d359b5599ecffd51a96f0a8799392c98c4e15242762ba455e37b1f5d6302203f2974e9afc8d641f9363167df48e5a845a8deba1381bf5a1b549ac04718a1ac01410459cdb91eb7298bc2578dc4e7ac2109ac3cfd9dc9818795c5583e720d2114d540724bf26b4541f683ff51968db627a04eecd1f5cff615b6350dad5fb595f8adf420c480afb333623864901c968022a07dd93fe3c06f5684ea728b8113e17fa91bd9514c5163a61450314a793bf317665ecdc54c2e843bb106aeee158876a91485c0522f6e23beb11cc3d066cd20ed732648a4e66704926db75bb17576a914621f617c765c3caa5ce1bb67f6a3e51382b8da296888ac00000000015a7b0100000000001976a91485c0522f6e23beb11cc3d066cd20ed732648a4e688ac00000000":[1,5],"0100000001d4a61b33e849c8df64a2c839b878437a0ef055887ff0bf4279b8a805a2043b69010000006b483045022100a038a71fc3218c67e64804171b8a311397872fff51c85cbef81170570915946b02202385c01f3c4b06416108b6b856ca4f112e79ed74bc36766df4d994a696a7479401210240917aa65f12d8051abae7e8e98eea3b085a766a2dd7bd7f71c8121304cca2980000000002c0c62d000000000017a91461b1cbc5cd1b50e69e1c895d6cbcc94376c4ab3c87345e1401000000001976a914a96a92963b7a65ac904875cfa5d535b31158882788ac00000000":5,"0100000001e4f0bb83bc3b52f921ad9d064768ba1702d9ec92befa3529a17e5163c90a11a0010000008a47304402202c8e3c6814938dae17c02125990cadd550edee97df9529f889639f4096f55fe4022060cf5b36a0a3b103ae705937a65903710b849296076ce010c61da48e0946b1ad0141044fbe9cf6ef9bf4a13a693ee1d431eb700a592e8097619e0cfe82aff2a5c231e7154e464e4ec94201007b403b6de9a5819b0bc31eef0741c4fe6e932bca6d9cca0000000002001bb7000000000017a914c192be92fa15e5a97cfeae84fb2ac830594ea9fb8780795209000000001976a9142b6a3314e8fcf1f1fd6b4d70b112bd5a1928505788ac00000000":3,"03b504de54d5940a81cf5f8c483025c6f39bfc7eed60a022549513fd8d6e41d74f":1,"0459cdb91eb7298bc2578dc4e7ac2109ac3cfd9dc9818795c5583e720d2114d540724bf26b4541f683ff51968db627a04eecd1f5cff615b6350dad5fb595f8adf4":1,"09a60dc3fafe6ba058b2a140457df1c3b446602595d47deed641cb635ffd25aa":[1,5],"0c480afb333623864901c968022a07dd93fe3c06f5684ea728b8113e17fa91bd9514c5163a61450314a793bf317665ecdc54c2e843bb106aeee158876a91485c0522f6e23beb11cc3d066cd20":1,"0cd90567497823097d03464b4b2d08dd659f1c5621dd55e9540bc9bcd3e191ec":[1,4],"0x0":1,"0x095ea7b30000000000000000000000007657ca877fac31d20528b473162e39b6e152fd2e00000000000000000000000000000000000000000000003635c9adc5dea00000":5,"0x209a08f2faaea4c6871cd4947293fa3fada5835e1f589fa7f0ab875a858104af":3,"0x40b8d435ff4bfbb202aed75dfc87f64e0d3da3838581b6635ae615e0454bd4fc":5,"0x4cc2308652423a1b05712def62fe5183dfa507bd033941bdb40b56a258760840":5,"0x4fd41289b816f6122e59a0759bd10441ead75d550562f4b3aad2fddc56eb3274":5,"0x52f50db7000000000000000000000000000000000000000000000000000000005acde5c48cebcb1af6fa5fddeb091f61f0af1c49a6de9922000000000000000000000000000000000000000000000000d867f293ba129629a9f9355fa285b8d3711a909200000000000000000000000053e546387a0d054e7ff127923254c0a679da6dbf00000000000000000000000000000000000000000000003635c9adc5dea00000":5,"0x52f50db7000000000000000000000000000000000000000000000000000000005b59efd0f1281d5c4b4b49ac582d5ee5cd43b871309e0b28000000000000000000000000000000000000000000000000d867f293ba129629a9f9355fa285b8d3711a909200000000000000000000000053e546387a0d054e7ff127923254c0a679da6dbf00000000000000000000000000000000000000000000003635c9adc5dea00000":3,"0x53e546387a0d054e7ff127923254c0a679da6dbf":[3,5],"0x7657ca877fac31d20528b473162e39b6e152fd2":[3,5],"0x7f5a84b233c8":1,"0x7f98870db978":1,"0x7f989439d630":1,"0x80addbc1b1ff0cf32949c78cde0dc4347f1a81e7f510fd266aa934523c92c2c1":5,"0x999f348959e611f1e9eab2927c21e88e48e6ef45":[3,5],"0x9f7e5402ed0858ea0c5914d44b900a42c89547b8":5,"0xbf13af6b32a0af2406fdfb23705742d2d1d097742af9bf3946029e8d1f3feba3":3,"0xc9b2bf9b67dcfea39dea71b3416922adfcae23f6410be7d109fb9df2e1c0695f":5,"0xd867f293ba129629a9f9355fa285b8d3711a9092":[3,5],"0xeb8ae1ed000000000000000000000000000000000000000000000000000000005acca1d68cebcb1af6fa5fddeb091f61f0af1c49a6de9922000000000000000000000000000000000000000000000000999f348959e611f1e9eab2927c21e88e48e6ef45":5,"0xeda1122cc037026e2d0f3901c797d2414df30a4ce700d18055925f416e575635c5c2b7ac":5,"0xf9010b81f98504a817c800830493e0947657ca877fac31d20528b473162e39b6e152fd2e80b8a452f50db7000000000000000000000000000000000000000000000000000000005b59efd0f1281d5c4b4b49ac582d5ee5cd43b871309e0b28000000000000000000000000000000000000000000000000d867f293ba129629a9f9355fa285b8d3711a909200000000000000000000000053e546387a0d054e7ff127923254c0a679da6dbf00000000000000000000000000000000000000000000003635c9adc5dea000001ba097c12ecc5769576b447344c87e687c503390ba2e4003a209a3c4fb322b58a38ba05eb7def14f000a1ee940ffb22417b94e5ad303611e789ff438d70addc8b15119":3,"101cc115cc6882e1fd150c35efd056d18a73c12a3321c406960844561922dfc0":1,"13inskgmfvjqayvfqp5ojuudxkkvcmtkoa":1,"13xmgnw7sttvxt26ypfzqkk2rvuvjfomvi":1,"146e":5,"163o7ig87tnunp1qf1rbrsju1uhfew9nnu":1,"1f317ce1ab1c7504d5e70cac4cb97f6e41fbaded4dd1f094d431a9f0a508ab44":3,"20680d49e72e1de6af9a0180b3293f2cbd0d0666":1,"2bimr99zxpyetxverrtoe4v3eebuaddlgd":4,"2mztqt2gugd7fx1at4vsbwqdg2uh1alkgq":4,"2n7gxryn4dd1mdygm3dmxmawd7k3rbtj1gp":1,"2ptewz6ypquyb3atgunuh5kalhhnm9qupf":4,"2vqfxhq4lfru2wfq2gp6btve2mivwuixsm":4,"2z1cwuzczwaxo1bummiiqdd7k5jpv5jvgk":4,"2zqw69xn69clsqrjdacgycutmvtpgc5hy5":4,"304402201c8869d359b5599ecffd51a96f0a8799392c98c4e15242762ba455e37b1f5d6302203f2974e9afc8d641f9363167df48e5a845a8deba1381bf5a1b549ac04718a1ac01":1,"3045022100ad5db8c05d7f702c8328ae5a817a13dd7f0fda876e3bb3b7729b041bb612275502200af30b833c06c8485ccec95de48c2238a4ffa4e4820dd6466b95dc5d26e883a":1,"35b":[1,4],"3kly8ynmbcwqkndsmtgwzvxx6hpu4awfx6":3,"41029c8c094a3d747f99e3b6960c6df1e5defaa81dfe961be6f3cae9755a6c3d":3,"415e":5,"46260875cb8c88ba918cdd913ae23c59562f9529":3,"483045022100ad5db8c05d7f702c8328ae5a817a13dd7f0fda876e3bb3b7729b041bb612275502200af30b833c06c8485ccec95de48c2238a4ffa4e4820dd6466b95dc5d26e883ae012103b504de54d5940a81cf5f8c483025c6f39bfc7eed60a022549513fd8d6e41d74f":1,"50314a793bf317665ecdc54c2e843bb106aeee15":5,"5d6972cbb7ec034003e7880302d69b2d83b54eb89193a606ff26d7fbb253bba1":5,"5d920e7093b2f0ac94cb1c13a42a79ed1c1290fcc4155d15a123d69b1afe05d2":4,"63a61446260875cb8c88ba918cdd913ae23c59562f95298876a9141a376f6634e41c22b28bc9ef3336a623717083a46704396b645bb17576a9142b6a3314e8fcf1f1fd6b4d70b112bd5a192850576888ac":3,"63a61450314a793bf317665ecdc54c2e843bb106aeee158876a91485c0522f6e23beb11cc3d066cd20ed732648a4e66704926db75bb17576a914621f617c765c3caa5ce1bb67f6a3e51382b8da296888ac":[1,5],"63a61450314a793bf317665ecdc54c2e843bb106aeee158876a914fbed00c1502fded3dfa2524f8672ee013bb3f28f670465bab85bb17576a914a96a92963b7a65ac904875cfa5d535b3115888276888ac":5,"675e379fa2e0ce4853b8d33ee13d90eb1cdc71aecdf94ecf455d3b7cf04577ac":4,"70eefae0106b787e592e12914e4040efd8181dd299fa314d8f66da6a95cd1cf":1,"76a91420680d49e72e1de6af9a0180b3293f2cbd0d066688ac":1,"76a9142b6a3314e8fcf1f1fd6b4d70b112bd5a1928505788ac":4,"76a9146277917f54f218d4723452a307f7134542db079688ac":4,"76a914774ef2ad06c0bf967b55b5e221af795d01e66bd388ac":4,"76a91485c0522f6e23beb11cc3d066cd20ed732648a4e688ac":[1,4],"76a914b3c0df73140cc787723252cc9f7c0db04953023188ac":4,"76a914db58f7b45d5555bff1b49a7a79e6e1cb25eb558288ac":4,"76a914f911b40d716f6a2da724cb333cccdb4f2546fb7688ac":4,"85c0522f6e23beb11cc3d066cd20ed732648a4e6":1,"886e":5,"8a673e9fcf5ea469e7c4180846834905e8d4c0f16c6e6ab9531efbb9112bc5e1":1,"8cebcb1af6fa5fddeb091f61f0af1c49a6de9922":5,"90f6b9b9a34acb486654b3e9cdc02cce0b8e40a8845924ffda68453ac2477d20":1,"95a968aa18866ffe6ed9ad39a06e27a90e55699734007173bfdd3daa4bab661d":1,"byte":[1,3,5],"case":5,"class":1,"default":1,"export":5,"float":1,"function":1,"import":[1,3,4,5],"int":1,"new":[1,5],"return":[1,5],"static":1,"true":1,"try":1,Adding:1,And:5,For:[4,5],IPs:1,The:[4,5],Using:4,_expir:1,_hash:1,_initi:1,_istoken:1,_particip:1,_secret:1,_token:1,_valu:1,a019e444e331ec843ae2d98b87073884e695dd08be06ba91f335af89dbe45473:5,a5c027027c695f403fe570850e35ffd44bb28479ecaaee039372015fe0aae7b2:[1,4,5],a5f0b7a955e606a8e54323d73e44abd608f240cb72cbad995845f2ba754a0ee:3,a82213fd237a2b4bf05c805611dc913125aef138bf2874f0668133a4bb5f3b64:1,abi:1,abl:[3,5],about:1,abov:1,absenc:1,account:1,acknowledg:1,activ:[0,1],actual:1,adapt:1,add_fe:[1,4],add_fee_and_sign:[1,3,5],add_sig_s:1,adddress:1,adding:1,addr:[1,4],address:[1,3,4,5],addressfamili:1,af_inet:1,after:[1,5],agent:1,agre:3,alic:1,alice_address:[4,5],alice_contract:[3,5],alice_eth_testnet_wallet:3,alice_ltc_address:5,alice_ltc_wallet:5,alice_mona_address:5,alice_mona_wallet:[3,5],alice_private_kei:5,alice_redeem:5,alice_redeem_tx_hash:5,aliceprivatekei:3,all:[0,1,5],allow:1,alreadi:5,also:[4,5],amount:[1,4,5],ani:[1,3],anonym:1,api:2,api_url:1,approve_token:[1,5],approve_transact:5,args_index:1,argument:[1,4],around:[1,5],ask:4,asm:1,atom:[0,1,2,3,4],atomic_swap:[1,4,5],attempt:1,attribut:1,attributedict:1,audit_contract:[1,3,5],auto_switch_param:1,automat:[1,4],avail:0,balanc:[1,2],base58_prefix:1,base:[2,4],baseapi:1,basenetwork:1,becaus:[1,3,5],been:[1,4,5],beetwen:1,befor:[1,3],behind:4,being:1,below:5,between:[0,4],bin:0,bit:3,bitcoin:[2,4],bitcoin_bas:1,bitcoin_network:1,bitcoinatomicswaptransact:1,bitcoinbasenetwork:1,bitcoincontract:1,bitcointestnet:[1,4],bitcointransact:1,bitcoinwallet:1,bitpai:1,blacklist:1,blacklist_nod:1,block:[1,2,5],block_numb:1,blockbust:5,blockchain:3,blockcyph:2,blockcypher_url:1,blockcypherapi:1,blockexplor:1,blockexplorer_tx:1,blockhash:1,blockheight:1,blocktim:1,bob:[3,5],bob_address:[4,5],bob_contract:5,bob_ltc_address:5,bob_ltc_wallet:5,bob_mona_address:5,bob_mona_wallet:5,bob_private_kei:5,bob_redeem:5,bool:1,both:5,branch:0,broadcast_transact:1,btc:1,buf_siz:1,buffer:1,bui:5,build:1,build_atomic_swap_contract:1,build_output:1,bytes20:1,bytes32:1,c037026e2d0f3901c797d2414df30a4ce700d18055925f416e575635c5c2b7ac:5,c480afb333623864901c968022a07dd93fe3c06f5684ea728b8113e17fa91bd9:[1,5],cach:4,calcul:[1,4],calculate_fe:1,call:5,can:[1,3,4,5],captur:1,capture_messag:1,chain:0,chainz:[1,5],chang:[1,4],check:[1,3,4,5],classmethod:1,clear:1,clone:0,close:1,clove:[3,5],clove_req_json:1,code:1,coin:[1,5],collect:5,com:[0,1],common:1,commun:1,compli:3,confirm:[1,3,4,5],confirmaton:1,connect:1,consol:5,constant:1,contain:1,contract:[2,3,4],contract_address:[1,3,5],contract_transact:[3,5],convert:1,core:1,correct:5,corrupt:1,count:[1,4],coutpoint:1,cpubkei:1,creat:[1,4,5],create_connect:1,create_unsigned_transact:1,creator:1,crofbwmvclxrlsyft794nrbepugmlf5amnj7vqwieenc34z7zspk:5,cryptoid:2,cryptoid_api_kei:5,cryptoid_url:1,cryptoidapi:1,cscript:1,csyq9jswnm79gudyz6tinkajrtijekgv4rxswgthp3smuhix9wk:5,ctransact:1,ctvubqcjrycdhicffxky5ycnph2rynrbmgrtvxbslkg8xr2my3j2:5,ctxin:1,ctxout:1,ctxwit:1,current:[1,4],custom:2,cv8fdju3jhled2d7q5l7fwlcus69tajygentwebnqhzzv9wxmbe7:1,dai:3,data:[1,3,4,5],datastructur:1,datetim:[3,5],dead:1,debug:1,decid:3,decim:[1,3,5],declar:1,decor:1,decreas:1,decrypt:1,decrypt_private_kei:1,def:1,default_port:1,default_symbol:1,default_wallet:1,definit:1,depend:4,deseri:1,deserialize_raw_transact:1,detail:[1,2,5],develop:2,dict:1,dictionari:1,did:3,differ:1,difficulti:1,directli:[4,5],disconnect:1,dns_seed:1,doc:[0,1],doe:[1,3],doesn:[1,4,5],domain:1,done:5,doublespenttxid:1,dws:5,e501:1,e50:1,easi:0,easiest:4,electrum:[3,5],empti:1,encod:1,encrpyt:1,encrypt:1,encrypt_private_kei:1,encrypted_private_kei:1,engin:1,enough:1,environ:5,error:1,establish:1,estim:1,eth:1,eth_test:5,eth_testnet:3,eth_to_swap:5,ether:5,ethereum:2,ethereum_bas:1,ethereumatomicswaptransact:1,ethereumbasenetwork:1,ethereumcontract:1,ethereumtestnet:[3,5],ethereumtokenapprovaltransact:1,ethereumtokentransact:1,ethereumtransact:1,ethereumwallet:1,etherscan:2,etherscan_api_kei:5,etherscanapi:1,even:4,event:1,everi:4,exampl:[1,2,3],exchang:5,exist:[1,5],expect:1,expected_message_typ:1,expir:1,explor:[1,2,5],expos:4,extern:[1,2],externalapirequestlimitexceed:1,extract:[1,5],extract_method_id:1,extract_secret:1,extract_secret_from_redeem_transact:[1,5],f1281d5c4b4b49ac582d5ee5cd43b871309e0b28:3,f7d5e6eb642db342647017621bda3c3f78ccb1338cf10d2a0ae90bd606582c26:4,factor:4,fail:1,fake:5,fals:[1,4],famili:1,fb2cc1d75a54c2fd7d120f307442ad1051157b4759fbb92c3656e8bb639cd909:3,fee:[1,2,3,5],fee_per_kb:[3,5],fee_per_kb_text:[3,5],fee_text:[3,5],field:1,fill:1,filter:1,filter_blacklisted_nod:1,filtering_support:1,find:1,find_redeem_token_transact:1,find_redeem_transact:[1,5],find_secret:1,find_transaction_details_in_redeem_ev:1,first:1,flag:1,format:1,found:1,free:[3,5],from:[1,4,5],from_base_unit:1,full:1,futur:1,gas_limit:[3,5],gaspric:[3,5],gather:[1,2],gener:1,generate_hash:1,generate_params_object:1,generate_secret_with_hash:1,genericparam:1,genesis_block:1,get:[1,2,5],get_bal:[1,4],get_confirmations_from_tx_json:1,get_contract_utxo:1,get_current_fee_per_kb:[1,4],get_current_nod:1,get_fe:[1,4],get_first_vout_from_tx_json:1,get_latest_block:1,get_method_nam:1,get_network_by_symbol:1,get_new_wallet:[1,5],get_nod:1,get_private_kei:[1,5],get_public_kei:1,get_raw_transact:1,get_token_by_address:1,get_token_by_attribut:1,get_token_by_symbol:[1,5],get_token_from_token_contract:1,get_transact:[1,4,5],get_transaction_url:1,get_utxo:[1,4],get_wallet:[1,3,5],getinfo:1,git:0,github:[0,1],give:1,given:[1,4],goe:1,going:1,halpful:1,has:[1,5],hash:[2,4,5],hasn:4,have:[1,4,5],header:1,her:5,here:3,hex:1,his:5,hood:1,hour:3,htm:5,http:[0,1,3,5],ignor:1,ignore_empti:1,impati:3,impossibledeseri:1,includ:4,increas:1,index:[1,4],info:[1,5],inform:1,infura_token:5,init_hour:1,initi:[1,3],initial_transact:[3,5],initiateswap:1,input:[1,4,5],insight:[2,3,5],insightapiv4:1,instal:2,instanc:1,integr:4,interact:5,inventori:1,is_test_network:1,is_token_contract:1,is_valid_address:1,is_valid_contract_script:1,istoken:1,its:1,json:1,just:[1,4,5],keep:1,kei:[1,2,3],kovan:5,l15kfzg4mdox2kqxeeezmjbbvedzzt1zl2vu59ynrtef6gb16b3c:5,laddr:1,lamden:0,last:[1,4],latest:1,layer:4,librari:0,like:1,limit:4,linter:0,list:[1,4],litecoin:[1,4,5],livedoc:0,locktim:[1,3,5],log:2,logger:1,look:1,ltc_network:5,luan5pwmspavgz32mgkqsuuakncfts37jq:[1,4,5],lxraxrgpo84p58746zabxuffevctybpxgb:5,mahnd7u7jd4dpa3r267zcb1xbaaizrdrml:3,mai:1,main:1,make:[0,1],map:1,master:0,match:1,max_monei:1,max_tries_numb:1,maximum:1,mbriwyyfwndramycn5otoudwdmrdfk33dq:3,mechan:3,messag:1,message_start:1,method:[1,4],method_id:1,miner:4,minimum:1,mmjtka92mxqfi3xdygreza69gjhkwacbn1:1,modifi:1,mona_network:[3,5],monei:3,mooncoin:4,more:5,mplx6ejs41da9bpsllkho35uy6kshu7dxp:5,mrklkxgzfqk4dgfrfaovyjetkxxcfkyz1q:1,msg:1,msg_getdata:1,msg_ping:1,msg_tx:1,msg_verack:1,msg_version:1,msj2ucz2ndhpvzsine5mgufzqfdggjbvtm:[1,4],msrzh2wrj7o3cesvctxsumk6i69kpwrtw:5,mtuxc6ujtiwb5fdoej2hzr8r1yurcj3hcn:1,multipl:1,mwsdkqhlons5kfbrnru3febyd9qkuj44y:5,name:1,necessari:1,need:[1,4,5],network:[2,4],noapi:1,node:1,non:4,nonc:[3,5],none:[1,4,5],nonetyp:1,nonpay:1,noqa:1,now:5,number:[0,1,4],number_of_hour:1,obj:1,object:[1,5],obviou:5,okei:3,omit:4,one:5,oop:3,op_checksig:1,op_dup:1,op_equalverifi:1,op_hash160:1,oper:5,option:1,org:[3,5],other:4,otherwis:1,our:5,out:1,outpoint:1,output:[1,4],over:[4,5],overview:2,own:[4,5],packag:1,page:0,parallel:5,paramet:1,parameter:1,parsed_script:1,parti:3,particip:[1,3],participate_hour:1,participate_transact:5,pass:[1,4,5],password:1,past:3,payabl:1,per:1,phvjh4aegay5ducngt6xofjld1laqo9smu:5,ping:1,ping_messag:1,pip:0,placehold:1,pleas:3,point:5,pong:1,port:1,portion:1,possibl:5,prefix:1,prepar:5,preview:0,previous:3,priv:1,privat:[1,5],private_kei:[1,3,5],privet:1,proof_of_work_limit:1,properti:1,proto:1,protocol:1,protocol_vers:1,protocolvers:1,provid:[1,3,5],proxi:[1,4],psehmygm6dgee3bmzslsomahzvhdzqolbm:3,pubkeyhash:1,publish:[1,2,5],put:3,python3:0,python:0,raddr:1,rais:1,rate:5,ravencoin:1,raw:1,raw_transact:[1,4],read:5,real:3,reason:5,receiv:[1,3,5],received_data:1,received_from:4,recipi:1,recipient_address:[1,3,4,5],redeem:1,redeemswap:1,refund:[1,2,4],refund_address:[3,5],refund_transact:3,refundswap:1,reject:1,relat:1,relayfe:1,rememb:3,repo:0,repres:1,request:[1,4],requir:[0,4,5],reset_connect:1,respond:1,respons:[1,3],revert:3,ripemd160:1,rm7w75bcc21lzxre62jy8jhfyykredqu8k:1,root:1,rootlogg:1,rpc_port:1,rule:1,run:1,runtimeerror:[1,3],satisfi:1,scene:4,script:[1,4],script_op:1,scriptpubkei:1,scriptsig:1,search:2,second:1,secret:[1,3,4],secret_hash:[1,3,5],secur:5,seed:1,self:1,send:[1,5],send_inventori:1,send_messag:1,send_p:1,send_pong:1,send_verack:1,send_vers:1,sender:[1,3,5],sender_address:[1,3,4,5],sent:1,sequenc:1,serial:1,serialized_transact:1,set:[1,3,5],set_contract:1,set_locktim:1,set_secret:1,set_symbol_map:1,setup:0,sever:4,share:1,she:[3,5],should:[1,5],show_detail:[1,3,5],sign:[1,4,5],sign_raw_transact:1,size:[1,3,5],size_text:[3,5],small:4,smart:1,socket:1,solvable_utxo:[1,4],some:[1,4],some_wallet:4,someth:[1,3],sourc:[1,2,4],specyf:0,spent:5,spentheight:1,spentindex:1,spenttxid:1,split:1,split_messag:1,sprovoost:1,start:1,startga:5,statemut:1,statu:1,still:[1,3,4],store:1,str:1,string:1,subsidy_halving_interv:1,suggest:4,support:[1,4,5],swao:1,swap:[0,1,2,3,4],switch_param:1,symbol:[1,5],taken:1,tell:1,term:3,termin:1,test:[1,5],test_nam:0,testnet:[1,2],thi:[1,3,4,5],those:4,thu:5,time:[1,3,4],timeoffset:1,timeout:1,timestamp:4,tip:2,to_base_unit:1,token:1,token_address:[1,3,5],tokens_to_swap:5,total_input:4,total_output:4,tox:0,tranact:1,transact:2,transaction_address:[1,3,5],transaction_addresss:3,transaction_link:[3,5],tri:1,trick:2,tupl:1,two:4,tx_address:1,tx_dict:1,tx_hash:1,tx_id:[1,4],tx_in:1,tx_input:1,tx_json:1,tx_limit:[1,4],tx_locktim:1,tx_script:[1,4],txid:1,type:1,ui_url:1,uint256:1,unconfirm:1,under:[1,5],unify_address:1,union:1,unit:1,unknown:1,unsign:1,unsigned_script_sig:1,unspent:1,until:3,updat:0,update_blacklist:1,upon:3,url:1,use:[0,1,4,5],used:[1,4],user:1,using:[1,3],utc:3,util:2,utxo:2,utxo_list:4,valid:[1,3,5],validate_address:1,valu:[1,3,4,5],value_from_base_unit:1,value_text:[3,5],value_to_base_unit:1,valueerror:1,valuein:1,valueout:1,valuesat:1,variabl:5,venv:0,version:[0,1],version_packet:1,versionbit:1,via:[1,5],view:1,vin:1,virtualenv:0,vout:[1,4],wai:4,wait:[1,3],wallet:[2,4],wallet_address:1,wallter:1,want:[0,1,4,5],warn:1,wasn:[1,3],web3:1,web3_provider_address:1,went:[1,3],were:1,when:[1,3,4],where:1,which:1,without:1,work:[1,3],wrapper:1,wrong:[1,3],yet:1,you:[0,3,4],your:[3,4],your_api_kei:5},titles:["Clove ","API","Clove documentation","Transaction refunds","Tips &amp; Tricks","Atomic swap example"],titleterms:{"voil\u00e0":3,alic:[3,5],api:[1,4,5],approv:5,assumpt:5,atom:5,audit:5,autom:4,back:3,balanc:4,base:[1,3,5],bbt:[3,5],bitcoin:[1,3,5],block:4,block_explor:1,blockcyph:1,build:0,captur:5,clove:[0,1,2,4],coin:3,commun:5,contract:[1,5],creat:3,cryptoid:[1,5],custom:4,detail:4,develop:0,document:[0,2],eth:5,ether:3,ethereum:[1,3,5],etherscan:[1,5],exampl:5,explor:4,external_sourc:1,fee:4,first:5,from:3,gather:4,get:[0,3,4],hash:1,her:3,infura:5,initi:5,insight:1,instal:0,kei:5,log:1,ltc:5,manual:4,mona:[3,5],monacoin:[3,5],network:[1,3,5],newtork:3,overview:0,particip:5,publish:[3,4],redeem:5,refund:3,run:0,search:1,second:5,secret:5,set:4,setup:5,should:3,sign:3,start:0,statu:0,swap:5,test:0,testnet:5,tip:4,token:5,transact:[1,3,4,5],trick:4,using:5,util:1,utxo:[1,4],via:4,wallet:[1,3,5]}})