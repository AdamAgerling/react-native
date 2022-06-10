import { Text } from 'react-native';

import { useState, useEffect } from 'react';
const SelectedAgent = () => {
  const [agents, setAgents] = useState(null);
  useEffect(() => {
    fetch('https://valorant-api.com/v1/agents')
      .then((response) => response.json())
      .then((result) => {
        setAgents(result.data);
      });
  }, []);
  return <Text>HEJ</Text>;
};
export default SelectedAgent;
