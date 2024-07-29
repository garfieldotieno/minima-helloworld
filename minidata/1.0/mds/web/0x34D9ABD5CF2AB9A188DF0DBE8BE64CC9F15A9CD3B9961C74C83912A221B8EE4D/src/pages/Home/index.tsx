import { useContext, useState } from 'react';
import FullStatus from './FullStatus';
import Block from '../../components/UI/Block';
import { appContext } from '../../AppContext';
import TitleBar from '../../components/TitleBar';
import MenuItem from '../../components/UI/MenuItem';
import ChainStatus from './ChainStatus';
import NodeStatus from '../../components/NodeStatus';
import translation from '../../../translation.json';
import TitleBlock from '../../components/TitleBlock';

function Home() {
  const { statusData, maximaData, maxContactData, maxContactStats } = useContext(appContext);
  const [showFullStatus, setShowFullState] = useState(false);
  const [showChainStatus, setShowChainStatus] = useState(false);

  const displayFullStatus = () => setShowFullState(true);
  const hideFullStatus = () => setShowFullState(false);
  const displayChainStatus = () => setShowChainStatus(true);
  const hideChainStatus = () => setShowChainStatus(false);

  const showBack = showChainStatus || showFullStatus;

  const goBackToHome = (e: any) => {
    e.stopPropagation();
    hideChainStatus();
    hideFullStatus();
  }

  return (
    <div className="relative app text-white">
      <div>
        <FullStatus display={showFullStatus} dismiss={hideFullStatus} />
        <ChainStatus display={showChainStatus} dismiss={hideChainStatus} />

        <TitleBar back={goBackToHome} showBack={showBack} />
        <div className="relative p-4 flex flex-col gap-6 max-w-xl mx-auto">
          <NodeStatus>
            <div className="cursor-pointer mt-4" onClick={displayChainStatus}>
              Need help?
            </div>
          </NodeStatus>

          {statusData && (
            <div className="rounded-md core-black-contrast overflow-hidden">
              <TitleBlock
                title="Minima"
                info={{
                  title: translation.en.MINIMA_INFO_TITLE,
                  textContent: translation.en.MINIMA_INFO_TEXT_CONTENT,
                }}
              />
              <div className="flex flex-col gap-0.5">
                <Block
                  title="Block"
                  value={statusData.chain.block}
                  info={{
                    title: translation.en.BLOCK_INFO_TITLE,
                    textContent: translation.en.BLOCK_INFO_TEXT_CONTENT,
                  }}
                />
                <Block
                  title="Block time"
                  value={statusData.chain.time}
                  info={{
                    title: translation.en.BLOCK_TIME_INFO_TITLE,
                    textContent: translation.en.BLOCK_TIME_INFO_TEXT_CONTENT,
                  }}
                />
                <Block
                  title="Version"
                  value={statusData.version}
                  info={{
                    title: translation.en.VERSION_INFO_TITLE,
                    textContent: translation.en.VERSION_INFO_TEXT_CONTENT,
                  }}
                />
                <Block
                  title="RAM"
                  value={statusData.memory.ram}
                  info={{
                    title: translation.en.RAM_INFO_TITLE,
                    textContent: translation.en.RAM_INFO_TEXT_CONTENT,
                  }}
                />
                <Block
                  title="Disk space"
                  value={statusData.memory.disk}
                  info={{
                    title: translation.en.DISK_SPACE_INFO_TITLE,
                    textContent: translation.en.DISK_SPACE_INFO_TEXT_CONTENT,
                  }}
                />
                <Block
                  title="Uptime"
                  value={statusData.uptime}
                  info={{
                    title: translation.en.UPTIME_INFO_TITLE,
                    textContent: translation.en.UPTIME_INFO_TEXT_CONTENT,
                  }}
                />
              </div>
            </div>
          )}

          {maxContactData && (
            <div className="rounded-md core-black-contrast overflow-hidden">
              <TitleBlock
                title="Maxima"
                info={{
                  title: translation.en.MAXIMA_INFO_TITLE,
                  textContent: translation.en.MAXIMA_INFO_TEXT_CONTENT,
                }}
              />
              <div className="flex flex-col gap-0.5">
                <Block
                  title="Contacts"
                  value={maxContactData.contacts.length}
                  info={{
                    title: translation.en.CONTACTS_INFO_TITLE,
                    textContent: translation.en.CONTACTS_INFO_TEXT_CONTENT,
                  }}
                />
                {maxContactData.contacts.length > 0 && (
                  <>
                    <Block
                      title="Same chain"
                      value={maxContactStats.sameChain}
                      info={{
                        title: translation.en.SAME_CHAIN_INFO_TITLE,
                        textContent: translation.en.SAME_CHAIN_INFO_TEXT_CONTENT,
                      }}
                    />
                    <Block
                      title="Network OK"
                      value={maxContactStats.ok}
                      info={{
                        title: translation.en.NETWORK_OK_INFO_TITLE,
                        textContent: translation.en.NETWORK_OK_INFO_TEXT_CONTENT,
                      }}
                    />
                  </>
                )}
                {maximaData && (
                  <Block
                    title="Poll"
                    value={maximaData.poll}
                    info={{
                      title: translation.en.POLL_INFO_TITLE,
                      textContent: translation.en.POLL_INFO_TEXT_CONTENT,
                    }}
                  />
                )}
              </div>
            </div>
          )}

          {statusData && (
            <div className="rounded-md core-black-contrast overflow-hidden">
              <TitleBlock
                title="Network"
                info={{
                  title: translation.en.NETWORK_TITLE,
                  textContent: translation.en.NETWORK_TEXT_CONTENT,
                }}
              />
              <div className="flex flex-col gap-0.5">
                <Block
                  title="Connections"
                  value={statusData.network.connected}
                  info={{
                    title: translation.en.CONNECTIONS_TITLE,
                    textContent: translation.en.CONNECTIONS_TEXT_CONTENT,
                  }}
                />
                <Block
                  title="From"
                  value={statusData.network.traffic.from}
                  info={{
                    title: translation.en.FROM_TITLE,
                    textContent: translation.en.FROM_TEXT_CONTENT,
                  }}
                />
                <Block
                  title="Total read"
                  value={statusData.network.traffic.totalread}
                  info={{
                    title: translation.en.TOTAL_READ_TITLE,
                    textContent: translation.en.TOTAL_READ_TEXT_CONTENT,
                  }}
                />
                <Block
                  title="Total write"
                  value={statusData.network.traffic.totalwrite}
                  info={{
                    title: translation.en.TOTAL_WRITE_TITLE,
                    textContent: translation.en.TOTAL_WRITE_TEXT_CONTENT,
                  }}
                />
                <Block
                  title="Read"
                  value={statusData.network.traffic.read}
                  info={{
                    title: translation.en.READ_TITLE,
                    textContent: translation.en.READ_TEXT_CONTENT,
                  }}
                />
                <Block
                  title="Write"
                  value={statusData.network.traffic.write}
                  info={{
                    title: translation.en.WRITE_TITLE,
                    textContent: translation.en.WRITE_TEXT_CONTENT,
                  }}
                />
              </div>
            </div>
          )}

          <div className="mt-4 mb-6">
            <MenuItem title="Full node status" onClick={displayFullStatus} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
