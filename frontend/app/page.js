// app/page.js
'use client'

import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Text,
  Input,
  Select,
  VStack,
  HStack,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { BellIcon } from '@chakra-ui/icons'

const CourseCard = ({ courseCode }) => {
  const cardBg = useColorModeValue('blue.100', 'blue.200')
  
  return (
    <Box
      bg={cardBg}
      p={8}
      borderRadius="md"
      textAlign="center"
      minH="120px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
      _hover={{ transform: 'translateY(-2px)', shadow: 'md' }}
      transition="all 0.2s"
    >
      <Text fontSize="lg" fontWeight="semibold" color="gray.700">
        {courseCode}
      </Text>
    </Box>
  )
}

export default function Home() {
  const headerBg = useColorModeValue('gray.400', 'gray.500')
  const footerBg = useColorModeValue('gray.300', 'gray.400')
  const mainBg = useColorModeValue('gray.50', 'gray.100')
  
  const courses = [
    'IE 506', 'IE 620', 'IE 621', 'IE 619',
    'IE 506', 'IE 620', 'IE 621', 'IE 619',
    'IE 506', 'IE 620', 'IE 621', 'IE 619'
  ]

  return (
    <Box minH="100vh" bg={mainBg}>
      {/* Header */}
      <Box bg={headerBg} py={4}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Text fontSize="lg" fontWeight="medium" color="white">
              courseinsight
            </Text>
            <HStack spacing={4}>
              <Text color="white">Home</Text>
              <IconButton
                aria-label="Notifications"
                icon={<BellIcon />}
                size="sm"
                variant="ghost"
                color="white"
                _hover={{ bg: 'whiteAlpha.200' }}
              />
              <Box
                w={8}
                h={8}
                bg="gray.600"
                borderRadius="full"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text fontSize="sm" color="white">U</Text>
              </Box>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.xl" py={8}>
        <VStack spacing={6} align="stretch">
          {/* Search and Filter */}
          <HStack spacing={4} maxW="600px">
            <Input
              placeholder="Search"
              bg="white"
              borderColor="gray.300"
              _placeholder={{ color: 'gray.500' }}
            />
            <Select
              defaultValue="Autumn"
              bg="white"
              borderColor="gray.300"
              maxW="150px"
            >
              <option value="Autumn">Autumn</option>
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option>
            </Select>
          </HStack>

          {/* Course Grid */}
          <Grid
            templateColumns="repeat(auto-fit, minmax(200px, 1fr))"
            gap={6}
            w="full"
          >
            {courses.map((course, index) => (
              <GridItem key={index}>
                <CourseCard courseCode={course} />
              </GridItem>
            ))}
          </Grid>
        </VStack>
      </Container>

      {/* Footer */}
      <Box bg={footerBg} py={4} mt={12}>
        <Container maxW="container.xl">
          <Text textAlign="center" color="gray.600" fontSize="sm">
            © Copyright of IEOR Council 2025
          </Text>
        </Container>
      </Box>
    </Box>
  )
}
