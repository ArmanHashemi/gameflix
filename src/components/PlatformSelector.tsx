import {Box, Button, HStack, Menu, MenuButton, MenuItem, MenuList, Tag} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
      <Box w="1000px" overflowX="auto" whiteSpace="nowrap">
        {data.map(platform => <Tag rounded='10px' size='lg' padding='2px 4px' marginRight='4px' variant='outline'
                                     colorScheme={selectedPlatform?.name === platform.name ? 'gray' : 'blue'}
                                     onClick={() => onSelectPlatform(platform)}
                                     key={platform.id}>{platform.name}</Tag>)}
      </Box>
  );
};

export default PlatformSelector;
